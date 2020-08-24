const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');   // Cross origin resource sharing
const mongoose = require("mongoose");
const passport = require('passport');
const passportLocal = require("passport-local").Strategy;
const bcrypt = require('bcryptjs');
const session = require('express-session');
const app = express();
//------------------------------END OF IMPORTS-------------------------------------------

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser:true, useCreateIndex:true, useUnifiedTopology:true}, 
    () => {
        console.log("Mongoose is connected");
}).catch(err => console.log("Error in DB Connection"));



//------------------------------MIDDLEWARES-------------------------------------------
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: "http://localhost:3000",
    credentials:true,
}))
app.use(session({
    secret:"secretcode@123",
    resave:false,
    saveUninitialized:false,
}))

app.use(cookieParser("secretcode@123"));
app.use(passport.initialize());
app.use(passport.session());
require('./passportConfig')(passport);
//-------------------------------------END OF MIDDLEWARES-------------------------------------

const omdbRouter = require('./routes/omdb');
const userRouter = require('./routes/user');


// These can send a response or pass it on
// Based on url you can do one of two things
// 1. Return a file
// 2. Execute a function and return a response

// app.use(express.static(path.join(__dirname, 'public')));
app.use('/omdb', omdbRouter);
app.use('/user', userRouter);
// app.get('/*', function (req, res) {
    // res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });
module.exports = app;