const express = require("express");
const app = express();
const path = require("path");
const cors=require("cors");
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({ path: "backend/db/config.env" });
}

app.use(express.json());
app.use(cors());
const user = require("./routes/userRoute");

app.use("/api/v2", user);

 module.exports = app;
