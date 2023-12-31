const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: String,
    image:String,
    author: String,
    body: String,
}, { timestamps: true });

module.exports = mongoose.model('Post', PostSchema);