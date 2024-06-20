const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middlleware.js");
const userController = require("../controllers/users.js")
//get signup for fill user info
router.get("/signup",userController.rendersignup );

//post method for user signup
router.post("/signup", wrapAsync(userController.signup));

//Login
router.get("/login",userController.renderLogin);

router.post("/login",
    saveRedirectUrl,
    passport.authenticate("local",{
    failureRedirect:"/login",
     failureFlash:true}), 
     userController.login
    );

//Logout
router.get("/logout",userController.logout)

module.exports = router;