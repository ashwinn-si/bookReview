const userModel = require("../models/userModel")
const bcrypt = require("bcrypt");

const login = async(data) =>{
    const {username, password} = data;
    
    const existingUser = await userModel.findOne({username : username})
    
    if(!existingUser){
        throw new Error("User not found")
    }
    
    const result = await bcrypt.compare(password, existingUser.password);
    
    if(!result){
        throw new Error("Incorrect password")
    }
    
    return {
        username : existingUser.username,
        role: existingUser.role,
        email: existingUser.email,
        name: existingUser.name
    }
}

const signUp = async(data) =>{
    const {username, password, email, name} = data;
    
    const existingUser = await userModel.findOne({
        username : username,
    })
    
    if(existingUser){
        throw new Error("exisiting user")
    }
    
    const hashPassword = await bcrypt.hash(password, existingUser.password, 10);
    
    const userDetails = {
        username : username,
        role : "user",
        email : email,
        password: hashPassword,
        name: name
    }
    
    const newUser = await userModel.save(userDetails);
    
    return
}

const addAdmin = async(data) =>{
    const {username, password} = data;
    
    const hashPassword = await bcrypt.hash(password, existingUser.password, 10);
    
    const userDetails = {
        username : username,
        role : "admin",
        email : "admin@gmail.com",
        password: hashPassword,
        name: "admin"
    }
    
    
}


module.exports = {
    login,
    signUp,
    addAdmin,
}