const mongoose = require("mongoose");
const User = require("./userModel");
const Test = require("./testModel");
const Lab = require("./labModel");

const bookingSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.ObjectId,
        ref:'User',
        required:true
    },
    labId:{
        type:mongoose.Schema.ObjectId,
        ref:'Lab'
    },
    status:{
        type:String,
        enum:['pending', 'confirmed', "collected", 'completed', 'cancelled'],
        default:'pending'
    },
    scheduledDate:{
        type:Date
    },
    address:{
        type:String
    },
    testDetails:{
        
        name:{
        type:String, // name of the test
        required:[true, "A test should have a name."]
    },
    description:{
        type:String,
    },
    sampleType:{
        type:String  // blood, stool
    },
    category:{
        type:String //'Full body checkup', 'Thyroid'
    },
    specialInstruction: {
        type:String
    },
    tat:{
        type:Number
    },
    price:{
        type:Number
    },
    discountedPrice:{
        type:Number
    }},
    createdAt:{
        type:Date,
        default:Date.now
    }
})

const Booking = mongoose.model("Booking", bookingSchema);
module.exports = Booking;