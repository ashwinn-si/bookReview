const express = require('express');
const router = express.Router();

const userController = require("../controllers/userController")
const userMiddleware = require("../middlewares/userValidation")

router.post("/add-review", userMiddleware.addReview, userController.addReview)
router.get("/user-review", userController.userReview)

module.exports = router;