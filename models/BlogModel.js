const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Your Name"]
  },
  msg: {
    type: String,
    required: [true, "Please Enter Your Msg"]
  },
  date:{
    type:String,
    required: [true, "Please Enter Your Date"]
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("BusiBlog", blogSchema);