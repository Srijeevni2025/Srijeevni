const { catchAsync } = require("../utils/catchAsync");
const jwt = require("jsonwebtoken");
const User = require('./../Models/userModel')

const getToken = id=>{
    return jwt.sign({_id:id},process.env.JWT_SECRET,{
        expiresIn:90000
    })
}

exports.register = catchAsync(async(req, res, next)=>{
    console.log(req.body)
    const {name, mobile, gender, dob} = req.body;
    req.userData = {name, mobile, gender, dob};
    console.log(req.userData)
    next();

})

exports.verifyAndSign = catchAsync(async(req, res, next)=>{
    req.userData.isVerified = true;
    const user = await User.create(req.userData);
    const token = getToken(user._id);

    res.status(200).json({
        status:"success",
        data:user,
        token:token
    })
})


