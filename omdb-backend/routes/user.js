const bcrypt = require('bcryptjs');
const router = require('express').Router();
let User = require("../models/user.model");
const passport = require('passport');

router.route("/").get((req, res) => {
    // console.log("Hello World");
    // res.send("Hello");
    next();
})
router.route("/signup").post((req, res) => {
    const email = req.body.email;
    
    User.findOne({email:email}, async(err, doc) => {
        if(err) throw err;
        if(doc) res.send("User Already exists");
        if(!doc) {
            const hashedPassword = await bcrypt.hash(req.body.password, 10);
            const newUser = new User({
                email:email, 
                password:hashedPassword 
            });
            await newUser.save();
            res.send("User Created!");
        };
    })
    // const newUser = new User({email});
    
});

router.route("/login").post((req, res, next) => {
    console.log(req.body);
    console.log("Login Route");
    passport.authenticate("local", (err, user, info) => {
        if(err) throw err;
        if(!user) res.send("No user exists");
        else {
            req.logIn(user, err=> {
                if(err) throw err;
                res.send('Successfully authenticated');
                console.log(req.user);
            });
        }
    })(req, res, next);
});
module.exports = router;