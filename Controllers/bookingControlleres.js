const Booking = require("./../Models/bookingModel")
const {catchAsync} = require("./../utils/catchAsync")
const Lab = require("./../Models/labModel");
const Test = require("../Models/testModel");


// Here testId in req.body is the _id of sub document(testsOffered) in lab 
exports.createBooking = catchAsync(async(req, res, next)=>{
    const {userId, labId, testId, status, scheduledDate, address} = req.body;
    const {testsOffered} = await Lab.findById(labId).select('testsOffered')
    console.log(testsOffered)
    let reqTestId;
    let price;
    let discountedPrice;
    testsOffered.forEach((obj)=>{
        
        if(testId == obj._id.toString()){
            reqTestId = obj.test;
            price = obj.price;
            discountedPrice = obj.discountedPrice;
        }
    });
    console.log("resTestId:",reqTestId)
    let testDetails = await Test.findById(reqTestId);
    testDetails = testDetails.toObject();
    testDetails.price = price;
    testDetails.discountedPrice = discountedPrice;
    console.log(testDetails);
    const booking = await Booking.create({userId, labId, testId, status, scheduledDate, address, testDetails});

    res.status(200).json({
        status:"success",
        data:booking
        
    })
})

exports.getAllBookings = catchAsync(async(req, res, next)=>{
    const bookings = await Booking.find().populate('userId').populate('labId');

    res.status(200).json({
        "status":"success",
        "data":bookings
    })
})