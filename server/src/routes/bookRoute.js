const express = require("express");
const router = express.Router();

const bookController = require("../controllers/bookController")

router.get("/all-books", bookController.getAllBook)

router.get("/book-review", bookController.getBookReview)

module.exports = router