const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const dbConnect = require('./config/dbConnect');

const authRoute = require('./routes/authRoute');
const adminRoute = require('./routes/adminRoute');
const userRoute = require("./routes/userRoute")
const bookRoute = require("./routes/bookRoute")

const app = express();


const allowedOrigins = ["http://localhost:3000", "https://your-frontend.com"];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true,
}));
app.use(helmet());
app.use(express.json());
app.use(rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: "Too many requests, please try again later."
}));

dbConnect();

app.use("/auth", authRoute);
app.use("/admin", adminRoute);
app.use("/user", userRoute);
app.use("/book", bookRoute)

module.exports = app;
