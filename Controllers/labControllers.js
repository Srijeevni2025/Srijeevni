const { catchAsync } = require("../utils/catchAsync");
const Lab = require("./../Models/labModel");
const appError = require("./../utils/appError")
const sendEmail = require("./../utils/email");
const fs = require("fs")
let labOnboardEmailTemplate = fs.readFileSync("./public/emailTemplate.html");


// 
exports.createLab = catchAsync(async(req, res, next)=>{
    const {name, contactEmail, contactPhone, address, testsOffered } = req.body;
    const lab = await Lab.create({name, contactEmail, contactPhone, address, testsOffered});
    const labOnboardedMailHtml = labOnboardEmailTemplate.toString().replace('{{##labName}}', name);
    const emailDetails = {
        to:contactEmail,
        subject:"Successful onboarding",
        text:lab.toJSON().toString(),
        html:labOnboardedMailHtml
    }
    sendEmail(emailDetails)
    res.status(200).json({
        status:"success",
        data:lab
    })
})

exports.getAllLabs = catchAsync(async(req, res, next)=>{
    const labs = await Lab.find().populate('testsOffered.test');
    res.status(200).json({
        status:"success",
        data:labs
    })
})
exports.addTestToLab = catchAsync(async(req, res, next)=>{
    const {labId, testId, tat, price, discountedPrice} = req.body;
    
    if(!labId || !testId || !tat){
        next(new appError(404, "please give a valid id."));
    }
    let lab = await Lab.findByIdAndUpdate(labId, {
        $push:{
            testsOffered:{
                test:testId,
                tat:tat,
                price:price,
                discountedPrice:discountedPrice
            }
        }
    }, {new:true,
        runValidators:false
    })

    res.status(200).json({
        status:"success",
        data:{
            lab
        }
    })

    })
