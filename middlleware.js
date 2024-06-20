const Listing = require("./models/listing");
const Review = require("./models/review");
const { listingSchema,reviewSchema } = require("./schema");
const ExpressErr = require("./utils/ExpressErr");

module.exports.isLoggedin =(req,res ,next)=> {
    if(!req.isAuthenticated()){
        req.session.redirectUrl = req.originalUrl;
        req.flash("error","You must be logged in first!")
       return res.redirect("/login")
      };
      next();
};

module.exports.saveRedirectUrl = (req,res,next) =>{
    if(req.session.redirectUrl){
    res.locals.redirectUrl =  req.session.redirectUrl
    }
     next();
};
module.exports.isOwner = async(req,res ,next) =>{
    let { id } = req.params;
    let listing = await Listing.findById(id);
    if(!listing.owner._id.equals(res.locals.currUser._id)){
      req.flash("error","You don't have any permission of this listing!");
      return  res.redirect(`/listings/${id}`);
    };
    next()
}
// Handling Error for listing

module.exports.validateListing = (req, res , next) =>{
    let {error} = listingSchema.validate(req.body);
    if(error){
      let errMsg = error.details.map((el)=>el.message).join('');
      throw new ExpressErr(400,errMsg)
    }
      else
    next()
  }
//handling error for review
module.exports.validateReview = (req, res, next) => {
    let { error } = reviewSchema.validate(req.body);
    if (error) {
        let errMsg = error.details.map((el) => el.message).join('');
        throw new ExpressErr(400, errMsg)
    }
    else
        next()
}
  //handle delete review
module.exports.isReviewAuthor = async(req,res ,next) =>{
  let { id ,reviewId} = req.params;
  let review = await Review.findById(reviewId);
  if(!review.author.equals(res.locals.currUser._id)){
    req.flash("error","You don't have permission to delete this review !");
    return  res.redirect(`/listings/${id}`);
  };
  next()
}