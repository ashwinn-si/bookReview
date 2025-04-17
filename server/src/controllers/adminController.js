const adminService = require("../services/adminService")

const addBook = async (req, res) => {
    try{
        await  adminService.addBook(req.body);
        
        res.status(200).json({
            message: "Book added successfully",
        });
        
    }catch(err){
        if(err.message === "Duplicate data"){
            return res.status(400).json({
                message: "Book already exists",
            })
        }
        
        res.status(500).send({
            message: err.message,
        })
    }
}

module.exports = {
    addBook
}