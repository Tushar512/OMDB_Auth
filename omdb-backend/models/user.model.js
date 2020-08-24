const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: {type: String, required:true, trim:true, minlength: 3, unique: true
    },
    password: {type:String, required:true,}
}, {
    collection: "users",
    timestamps: true
});

const User = mongoose.model('User', userSchema);
module.exports = User;