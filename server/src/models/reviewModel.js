const mongoose = require('mongoose');
const {Mongoose} = require("mongoose");

const reviewSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "UserID is Required"]
    },
    review: {
        type: String,
        required: [true, "Review is Required"]
    },
    bookId: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "Book ID is Required"],
        ref: "Book"
    },
    stars: {
        type: String,
        required: [true, "Stars is Required"]
    }
})

const reviewModel = mongoose.model("Review", reviewSchema);

module.exports = reviewModel;