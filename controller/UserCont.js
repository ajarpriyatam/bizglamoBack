const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const BusiDetails = require("../models/UserModel");
const BusiBlog = require("../models/BlogModel")

exports.createDetails = catchAsyncErrors(async (req, res, next) => {
  console.log(req.body)
  const details = await BusiDetails.create(req.body);
  res.status(201).json({
    success: true,
    details
  });
});
exports.getAllBlog=catchAsyncErrors(async(req,res, next)=>{
  const blogAll = await BusiBlog.find()
  const blogCount = await BusiBlog.countDocuments();
  res.status(200).json({
      success:true,
      blogAll,
      blogCount
  })
})