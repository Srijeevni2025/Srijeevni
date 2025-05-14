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
               test:{ type: mongoose.Schema.ObjectId,
                ref:'Test'
               },
               tat:{
                type:Number
               },
               price:{
               type:Number,
               
               },
               discountedPrice:{
               type:Number
               }
            }
        
    ]
})

const Lab = mongoose.model("Lab", labSchema);
module.exports = Lab;