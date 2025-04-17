const { body, validationResult} = require("express-validator");

const addReview = [
    body("username").trim().isLength({min : 1}).withMessage("username is missing !!"),
    body("review").trim().isLength({min: 1}).withMessage("review is missing !!"),
    body("stars").trim().isLength({min: 1}).withMessage("stars is missing !!"),
    body("bookId").trim().isMongoId().withMessage("bookId is missing !!"),
    
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).send({
                errors: errors.array()[0].msg
            })
        }
        next();
    }
]

module.exports = {
    addReview,
}