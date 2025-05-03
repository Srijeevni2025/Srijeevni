const mongoose = require("mongoose");

const testSchema = new mongoose.Schema({
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
    price:{
        type:Number,
        required:[true, "There should be a price."]
    },
    discountedPrice:{
        type:Number
    }
})

const Test = mongoose.model("Test", testSchema);
module.exports = Test;