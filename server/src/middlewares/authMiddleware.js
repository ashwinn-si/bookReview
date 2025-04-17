const { body, validationResult} = require("express-validator");

const validateLogin = [
    body("username").trim().isLength({ min: 1 }).withMessage("Enter Username !!"),
    body("password").trim().isLength({ min: 1 }).withMessage("Enter Password !!"),
    
    (req, res, next) =>{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                message: errors.array()[0].msg,
            });
        }
        next();
    }
]

const validateSignUp = [
    body("username").trim().isLength({ min: 1 }).withMessage("Enter Username !!"),
    body("password").trim().isLength({ min: 1 }).withMessage("Enter Password !!"),
    body("email").trim().isEmail().withMessage("Enter Email !!"),
    body("name").trim().isLength({ min: 1 }).withMessage("Enter Name !!"),
    
    (req, res, next) =>{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                message: errors.array(),
            });
        }
        next();
    }
]

module.exports = {
    validateLogin,
    validateSignUp
}