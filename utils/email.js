const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const fs = require('fs')
dotenv.config({path: "./*.env"})



const sendEmail = async(option)=>{

const transporter = nodemailer.createTransport({
    host:process.env.MAILTRAP_HOST,
    port:process.env.MAILTRAP_PORT,
    auth:{
        user:process.env.MAILTRAP_USER,
        pass:process.env.MAILTRAP_PASS
    }
})

const options = {
    from:"raj.ts@gmail.com",
    to:option.to,
    subject:option.subject,
    text:option.text,
    html:option.html
}
 
  await transporter.sendMail(options);

}

module.exports = sendEmail;