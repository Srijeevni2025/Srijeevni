const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "An user should have a name."]
    },
    mobile:{
        type:String,
        required:[true, "Enter the mobile number."],
        unique:true
    },
    isVerified:{
        type:Boolean,
        default: false
    },
    gender:{
        type:String,
        enum:['male', 'female', 'other']
    },
    dob:{
        type:Date
    },
    role:{
        type:String,
        default:'user'
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
},
{
    toObject:{
        virtuals:true
    },
    toJSON:{
        virtuals:true
    }
})


// creating virtuals
userSchema.virtual("age").get(function(){
    return (Date.now() - this.dob)/(365 * 24 * 60 * 60 * 1000);
})

const User = mongoose.model("User", userSchema);
module.exports = User;