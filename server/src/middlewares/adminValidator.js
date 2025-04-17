const { body, validationResult} = require("express-validator");

const addBook = [
    body("name").trim().isLength({ min: 1 }).withMessage("Book title is missing !!"),
    body("author").trim().isLength({ min: 1 }).withMessage("Author is missing!!"),
    body("category").trim().isArray({min : 1}).withMessage("Category is missing!!"),
    
    (req,res,next) =>{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                message: errors.array()[0].msg,
            })
        }
        next();
    }
]

module.exports = {
    addBook,
}