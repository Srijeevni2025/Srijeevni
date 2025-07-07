const Test = require("./../Models/testModel");
const { catchAsync } = require("../utils/catchAsync");
const sendEmail = require('./../utils/email')
exports.createTest = catchAsync(async(req, res, next)=>{
      const test = await Test.create(req.body);
      res.status(200).json({
        status:"success",
        data:test
      })
})

exports.getAllTests = catchAsync(async(req, res, next)=>{
    const tests = await Test.find();
    const mailDetails = {
      from:"rajanchouhan@gmail.com",
      to:"aman@gmail.com",
      subject:"Getting all the texts",
      text:"rajan"
    }
    sendEmail(mailDetails)
    res.status(200).json({
        status:"success",
        data:tests
    })
})