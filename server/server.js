const app = require("./src/app")
const helment = require("helmet")
const helmet = require("helmet");
const cors = require("cors");
const dbConnect = require("./src/config/dbConnect")
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: "Too many requests, please try again later."
});

app.use(helmet())
app.use(cors())
app.use(limiter);


dbConnect();
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})