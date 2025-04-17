const mongoose = require('mongoose')
require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URL || "";

function dbConnect(){
    mongoose.connect(MONGODB_URI).then(()=>{
        console.log("MongoDB Connected!");
    })
}

module.exports = dbConnect;