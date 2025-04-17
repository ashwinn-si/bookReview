const express = require("express");
const route = express.Router();

const adminValidator = require("../middlewares/adminValidator");
const adminController = require("../controllers/adminController")

route.post("/add-book", adminValidator.addBook, adminController.addBook);

module.exports = route