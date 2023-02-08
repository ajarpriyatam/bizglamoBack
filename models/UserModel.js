const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Your Name"]
  },
  domain:{
    type:String,
    required: [true, "Please Enter Your Domain"]
  },
  email: {
    type: String,
    required: [true, "Please Enter Your Email"],
  },
  country: {
    type: String,
    required: [true, "Please Enter Your Country"]
  },
  query: {
    type: String,
    required: [true, "Please Enter Your query"]
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("BusiDetails", userSchema);