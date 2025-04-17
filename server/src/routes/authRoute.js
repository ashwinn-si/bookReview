const express = require("express");
const router = express.Router();

const authMiddleware = require("../middlewares/authMiddleware")
const authController = require("../controllers/authControllers")

router.post("/login", authMiddleware.validateLogin, authController.login);
router.post("/signup", authMiddleware.validateSignUp, authController.signUp);
router.post("/addAdmin", authController.addAdmin);

module.exports = router;