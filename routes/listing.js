const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedin, isOwner, validateListing } = require("../middlleware.js");
const listingController = require("../controllers/listings.js");


//Index Route
router.get("/",wrapAsync (listingController.index)
  );
  
  //New Route
  router.get("/new", isLoggedin,listingController.renderNewForm);
  
  //Show Route
  router.get("/:id",wrapAsync (listingController.renderShowRout));
  
  
  //Create Route
  router.post("/",validateListing ,wrapAsync(listingController.creatNewListing)
  );
  
  //Edit Route
  router.get("/:id/edit",isLoggedin,
    isOwner,
    wrapAsync(listingController.renderEditRout));
  
  //Update Route
  router.put("/:id",isLoggedin,
    
    validateListing,wrapAsync (listingController.updateListing));
  
  //Delete Route
  router.delete("/:id",isLoggedin,    isOwner,
    wrapAsync(listingController.deleteListing));
  
  







module.exports = router;