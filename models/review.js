const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    comment:String,
    reviews:{
        type:Schema.ObjectId
    }
})









const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;