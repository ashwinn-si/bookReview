const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter a book name"],
    },
    author:{
        type: String,
        required: [true, "Please enter a author name"],
    },
    category: {
        type: [String, ],
        required: [true, "Please enter a category"],
    }
})

const bookModel = mongoose.model("Book", bookSchema);

module.exports = bookModel;