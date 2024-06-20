const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const { validateReview, isLoggedin, isReviewAuthor } = require("../middlleware.js");
const reviewController = require("../controllers/reviews.js")



//Review
//Post review route for create review.
router.post("/",
    isLoggedin,
    validateReview, wrapAsync(reviewController.createReview))
//Delete review route
router.delete("/:reviewId",
    isLoggedin,
    isReviewAuthor,
    wrapAsync(reviewController.destroyReview))


module.exports = router