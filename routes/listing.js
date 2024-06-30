const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedin, isOwner, validateListing } = require("../middlleware.js");
const listingController = require("../controllers/listings.js");
const multer = require("multer");
const {storage} = require("../cloudConfig.js")
const upload = multer({storage});



router.route("/")
.get(wrapAsync (listingController.index))
 .post(isLoggedin,upload.single('listing[image]'),validateListing,wrapAsync(listingController.creatNewListing)
   )
.post((req,res)=>{
  res.send(req.file)
})

 //New Route
 router.get("/new", isLoggedin,listingController.renderNewForm);

  //Show Route & Update Route
router.route("/:id")
.get(wrapAsync (listingController.renderShowRout))
.put(isLoggedin,  upload.single('listing[image]'), 
  validateListing,wrapAsync (listingController.updateListing)) 
  .delete(isLoggedin,    isOwner,
    wrapAsync(listingController.deleteListing))

  
  
  //Edit Route
  router.get("/:id/edit",isLoggedin,
    isOwner,
    wrapAsync(listingController.renderEditRout));
  
  
  







module.exports = router;