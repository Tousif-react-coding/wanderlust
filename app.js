const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const ejsMate = require("ejs-mate");
const methodOverride = require("method-override");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressErr = require("./utils/ExpressErr.js");
const { listingSchema,reviewSchema} = require("./schema.js");
const Review = require("./models/review.js");
const listings = require("./routes/listing.js");
//const { errorMonitor } = require("stream");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,"/public")));
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);


app.get("/", (req, res) => {
  res.send("Hi, I am root");
});





//handling error for review
const validateReview = (req, res , next) =>{
  let {error} = reviewSchema.validate(req.body);
  if(error){
    let errMsg = error.details.map((el)=>el.message).join('');
    throw new ExpressErr(400,errMsg)
  }
    else
  next()
}

//routes
app.use("/listings", listings)
//Review
//Post review route
app.post("/listings/:id/reviews", validateReview,wrapAsync(
  async (req , res )=>{
    let listing = await Listing.findById(req.params.id);
    let newReview  = new Review(req.body.review);
    listing.reviews.push(newReview);
     
     await newReview.save();
     await listing.save();
    
    console.log("review saved")
    res.redirect(`/listings/${listing._id}`)
    
    }
))
//Delete review route
app.delete("/listings/:id/reviews/:reviewId",wrapAsync(async(req,res)=>{
  let {id,reviewId} = req.params;
  await Listing.findByIdAndUpdate(id,{$pull:{reviews:reviewId}})
  await Review.findByIdAndDelete(reviewId);
  res.redirect(`/listings/${id}`);
}))

// app.get("/testListing", async (req, res) => {
//   let sampleListing = new Listing({
//     title: "My New Villa",
//     description: "By the beach",
//     price: 1200,
//     location: "Calangute, Goa",
//     country: "India",
//   });

//   await sampleListing.save();
//   console.log("sample was saved");
//   res.send("successful testing");
// });

//costume err
app.all("*",(req,res,next)=>{
  next(new ExpressErr(404,"404 Page Not Found!"))
})

app.use((err,req,res ,next )=>{
  let {status = 500,message="Something Went wrong!"}= err;
  
//res.status(status).send(message)
res.render("error.ejs",{err})
});


app.listen(8080, () => {
  console.log("server is listening to port 8080");
});
