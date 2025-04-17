const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const dbConnect = require('./config/dbConnect');
const authRoute = require('./routes/authRoute');

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: "Too many requests, please try again later."
}));

dbConnect();

app.use("/auth", authRoute);

module.exports = app;
