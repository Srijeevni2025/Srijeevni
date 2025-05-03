const mongoose = require("mongoose");
const Test = require("./testModel");

const labSchema = new mongoose.Schema({
    name: {
        type:String, 
        required:[true, "A lab name is required."]
    },
    contactEmail:{
        type:String
    },
    contactPhone:{
        type:String
    },
    address:{
        type:String
    },
    testsOffered:[
        {
            type: mongoose.Schema.ObjectId,
            ref:'Test'
        }
    ]
})

const Lab = mongoose.model("Lab", labSchema);
module.exports = Lab;