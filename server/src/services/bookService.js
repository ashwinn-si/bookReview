const reviewModel = require("../models/reviewModel")
const bookModel = require("../models/bookModel")
const mongoose = require("mongoose")

const getAllBooks = async (data) => {
    const books = await  bookModel.find().select("-__v");
    
    return books
}

const bookReview = async (data) => {
    
    const reviews = await reviewModel.find({
        bookId: new mongoose.Types.ObjectId(data.bookId),
    }).select(["username","stars","review","-_id"]);
    
    return reviews;
}

module.exports = {
    getAllBooks,
    bookReview,
}