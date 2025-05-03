const { catchAsync } = require("../utils/catchAsync");
const User = require("./../Models/userModel");

exports.createUser = catchAsync(async(req, res, next)=>{

    const {name, gender, dob, mobile} = req.body;
    const user = await User.create({name,mobile,gender,dob});
    res.status(200).json({
        status:"success",
        data:user
    })
})


// Handler function to get all users
exports.getAllUsers = catchAsync(async(req, res, next)=>{
    const users = await User.find();
    res.status(200).json({
        status:"success",
        data:users
    })
})


