const reviewModel = require("../models/reviewModel")
const bookModel = require("../models/bookModel")
const mongoose = require("mongoose")

const getRating = async (bookId) => {
    const allRatings = await reviewModel.find({ bookId }).select("stars -_id");
    
    if (allRatings.length === 0) return 1;
    
    let sum = 0;
    allRatings.forEach(r => {
        sum += parseInt(r.stars);
    });
    
    return (sum / allRatings.length).toFixed(2);
};

const getAllBooks = async () => {
    const books = await bookModel.find().select("-__v").lean(); // <-- use `.lean()` to make them iterable
    
    const booksWithRatings = await Promise.all(
        books.map(async (book) => {
            const stars = await getRating(book._id);
            return { ...book, stars };
        })
    );
    
    return booksWithRatings;
};

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