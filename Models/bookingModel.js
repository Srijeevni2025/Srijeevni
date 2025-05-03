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
    testId:{
        type:mongoose.Schema.ObjectId,
        ref:'Test',
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
    createdAt:{
        type:Date,
        default:Date.now
    }
})

const Booking = mongoose.model("Booking", bookingSchema);
module.exports = Booking;