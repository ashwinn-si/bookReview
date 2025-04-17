const express = require('express');
const app = express();

const authRoute = require("./routes/authRoute")

app.use("/auth", authRoute);

module.exports = app;