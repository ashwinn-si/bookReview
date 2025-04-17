const bookModel = require("../models/bookModel")
const reviewModel = require("../models/reviewModel")
const mongoose = require("mongoose")

const userReview = async(data) => {
    const {username} = data
    
    const reviewModelReturn = await reviewModel
        .find({ username })
        .populate("bookId", "name author -_id")
        .select("bookId review stars -_id");
    
    const reviews = reviewModelReturn.map((review) => {
        return(
            {
                review : review.review,
                stars : review.stars,
                name: review.bookId.name,
                author: review.bookId.author
            }
        )
    })
    return reviews;
}

const addReview = async (data) => {
    const {username, review, bookId, stars} = data
    
    const newReview = new reviewModel({
        username,
        review,
        stars,
        bookId,
    })
    
    await newReview.save()
    
    return
}
module.exports = {
    userReview,
    addReview
};