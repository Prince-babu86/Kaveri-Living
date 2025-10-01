const express = require("express");

const app = express();
const authRoute = require("./routes/auth.route");
const cookieParser = require("cookie-parser");
const cors = require("cors");
app.use(cookieParser());

// middlewares
app.use(express.json());
app.use(cors());
// routes

app.use("/auth", authRoute);

module.exports = app;

