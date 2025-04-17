const bookService = require("../services/bookService")

const getAllBook = async (req, res) => {
    try{
        const reviews = await bookService.getAllBooks()
        res.status(200).json(reviews)
    }catch(err){
        res.status(500).json({message:err})
    }
}

const getBookReview = async (req, res) => {
    try{
        const bookId = req.query.bookId
        
        if(!bookId){
            throw new Error("Book ID is missing")
        }
        
        const reviews = await bookService.bookReview({bookId})
        
        res.status(200).json(reviews)
    }catch(err){
        if(err.message === "Book ID is missing"){
            return res.status(400).send({error: "Book ID is missing"})
        }
        
        res.status(500).json({message:err})
    }
}

module.exports = {
    getAllBook,
    getBookReview,
}