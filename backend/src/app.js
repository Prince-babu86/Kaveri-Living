const express = require("express");

const app = express();
const authRoute = require("./routes/auth.route");
const tiffinRoute = require("./routes/tiffin.route");
const cookieParser = require("cookie-parser");
const cors = require("cors");


// middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "https://kaveri-living.vercel.app",
    credentials: true,
}));
// routes

app.use("/auth", authRoute);
app.use("/tiffin", tiffinRoute);

module.exports = app;

