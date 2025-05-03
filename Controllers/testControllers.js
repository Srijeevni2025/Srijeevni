const Test = require("./../Models/testModel");
const { catchAsync } = require("../utils/catchAsync");

exports.createTest = catchAsync(async(req, res, next)=>{
      const test = await Test.create(req.body);
      res.status(200).json({
        status:"success",
        data:test
      })
})

exports.getAllTests = catchAsync(async(req, res, next)=>{
    const tests = await Test.find();
    res.status(200).json({
        status:"success",
        data:tests
    })
})