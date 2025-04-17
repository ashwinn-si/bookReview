const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is Required"]
    },
    password: String,
    email : {
        type: String,
        required: [true, "Email is Required"]
    },
    name: {
        type: String,
        required: [true, "Name is Required"]
    },
    role:{
        type: String,
        required: [true, "Role is Required"],
        enum:["user", "admin"]
    }
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;