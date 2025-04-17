const express = require("express");
const router = express.Router();

const authMiddleware = require("../middlewares/authMiddleware")
const authController = require("../controllers/authControllers")
const userModel = require("../models/userModel")

router.post("/login", authMiddleware.validateLogin, authController.login);
router.post("/signup", authMiddleware.validateSignUp, authController.signUp);
router.post("/addAdmin", authController.addAdmin);
router.get("/allUser", async (req, res) => {
    const result = await userModel.find();
    res.json(result);
})

module.exports = router;