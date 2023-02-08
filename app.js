const express = require("express");
const app = express();
const path = require("path");

if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({ path: "backend/db/config.env" });
}

app.use(express.json());

const user = require("./routes/userRoute");

app.use("/api/v2", user);

 module.exports = app;
