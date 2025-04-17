const authService = require("../services/authServices")

const login = async(req, res) =>{
    try{
        const {username, role, email, name } = await authService.login(req.body);
        
        res.status(200).json({
            username: username,
            email: email,
            name: name,
            role: role,
        })
        
    }catch(err){
        if(err.message === "User not found"){
            return res.status(401).json({
                message: "username not found !!",
            })
            
        }
        
        if(err.message === "Incorrect password"){
            return res.status(401).json({
                message: "Incorrect password",
            })
        }
        
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

const signUp = async(req, res) =>{
    try{
        const {username, role, email, name } = await authService.signUp(req.body);
        
        res.status(200).json({
            username: username,
            email: email,
            name: name,
            role: role,
        })
    }catch(err){
        
        if(err.message === "exisiting user"){
            return res.status(401).json({
                message: "existing user",
            })
        }
        
        res.status(500).json({
            message: err.message,
        })
    }
}

const addAdmin = async(req, res) =>{
    try{
        await authService.addAdmin(req.body);
        
        res.status(200).json({
            message: "Admin added successfully",
        })
    }catch(err){
        res.status(500).json({
            message: err.message
        })
    }
}


module.exports = {
    login,
    signUp,
    addAdmin,
}