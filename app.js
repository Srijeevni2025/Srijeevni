const express = require('express');
const dotenv = require('dotenv');
const  errorHandler  = require('./Controllers/errorControllers');
dotenv.config({path:'./.env'})
const app = express();




//importing all the routers
const userRouter = require('./Routers/userRouter');
const testRouter = require('./Routers/testRouter');
const labRouter = require("./Routers/labRouter");
const bookingRouter = require("./Routers/bookingRouter")

// ------middlewares--------

// Middleware to parse the request payload
app.use(express.json());




// -------------------mounting all the routers------------
app.use("/api/v1/users", userRouter);
app.use("/api/v1/tests", testRouter);
app.use('/api/v1/labs', labRouter);
app.use('/api/v1/bookings', bookingRouter);


app.use((req, res, next)=>{
    const error = new Error("Requested route not found..");
    error.status = "failed";
    error.statusCode = 404;
    next(error);
})


app.use(errorHandler);


module.exports = app;