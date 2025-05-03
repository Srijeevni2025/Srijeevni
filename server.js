const app = require('./app.js');
const mongoose = require('mongoose');

// Adding password to database url.
const databaseUrl = process.env.DATABASE_URL.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

// connecting to database
mongoose.connect(databaseUrl).then(val=>console.log("server connected to database."));


app.listen(process.env.PORT || 8000, ()=>{
    console.log("server is running on port 3000");
})