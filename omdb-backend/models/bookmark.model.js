const mongoose = require("mongoose");

const bookmarkSchema = new mongoose.Schema({
    username : {type: String, required:true, unique:true, trim:true, minlength: 3},
    imdbId: {type: String, required:true, unique:true, trim:true, minlength: 3},
    movie_title: {type: String, required:true, unique:true, trim:true, minlength: 3},
}, {
    collection: "Bookmarks",
    timestamps:true,
});
const Bookmark = mongoose.model('Bookmark', bookmarkSchema);
module.exports = Bookmark;