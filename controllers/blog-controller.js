const Post = require('../models/post');
const getBlog = (req, res) => {
    res.render('home');
}

const makePost = async (req, res) => {
    const post = new Post({ title: 'First blog post', author: 'Alex', body: 'Hello blog world' });
    await post.save();
    res.send(post);
}

module.exports = {
    getBlog, makePost
}