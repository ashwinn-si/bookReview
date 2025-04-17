const bookModel = require("./../models/bookModel")

const addBook = async(data) =>{
    const {name, author, category} = data;
    
    const exisistingBook = await bookModel.findOne({
        name : name,
        author : author
    })
    
    if(exisistingBook){
        throw new Error("Duplicate data")
    }
    
    const newBook = new bookModel({
        name: name,
        author: author,
        category: category
    })
    
    await newBook.save();
}

module.exports = {
    addBook
}