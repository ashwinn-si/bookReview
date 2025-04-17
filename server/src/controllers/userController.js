const userService = require("../services/userService")

const userReview = async(req, res) => {
    try{
        const username = req.query.username;
        if(!username){
            throw new Error("Username is required");
        }
        const reviews = await userService.userReview({username})
        
        res.status(200).json(reviews)
    }catch(e){
        if(e.message === "Username is required"){
            return res.status(400).json({
                message:"Username is required"
            })
        }
        res.status(500).send({
            message: e.message,
        })
    }
}

const addReview = async (req, res) => {
    try{
        await userService.addReview(req.body)
        
        res.status(200).json({
            message:"Successfully added review"
        })
        
    }catch(e){
        res.status(500).send({
            message: e.message,
        })
    }
}

module.exports = {
    userReview,
    addReview
};