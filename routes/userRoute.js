const express = require("express");
const {
  createDetails, getAllBlog
} = require("../controller/UserCont.js");
const router = express.Router();
router.route("/send_details").post(createDetails);
router.route("/all/blog").get(getAllBlog);
module.exports = router;