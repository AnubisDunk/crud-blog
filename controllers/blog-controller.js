const Post = require('../models/post');
const getBlog = async (req, res) => {
    const posts = await Post.find({});
    res.render('posts', { posts });
}
const getHome = (req, res) => {
    res.render('home');
}

const getPost = async (req, res) => {
    const post = await Post.findById(req.params.id);
    res.render('details', { post })
}
const makePostForm = (req, res) => {
    res.render('new');
}
const makePost = async (req, res) => {
    const post = new Post(req.body.post);
    await post.save();
    res.redirect(`/post/${post._id}`);
}

const editPost = async (req, res) => {
    const { id } = req.params;
    const post = await Post.findByIdAndUpdate(id, { ...req.body.post });
    res.redirect(`/post/${post._id}`);
}

const editPostForm = async (req, res) => {
    const post = await Post.findById(req.params.id);
    res.render('edit', { post });
}

const deletePost = async (req, res) => {
    await Post.findByIdAndRemove(req.params.id);
    res.redirect('/posts');
}


const seedDB = async (req, res) => {
    // await Post.deleteMany({});
    for (let i = 0; i < 5; i++) {
        const post = new Post({ title: `Post ${i}`, author: `Johhny ${i}`, body: `This is a story about ${i} and repeat ${Math.floor(Math.random() * 100) + 90} ` });
        await post.save();
    }
}

module.exports = {
    getHome, getBlog, makePost, makePostForm, seedDB, getPost, editPost, editPostForm, deletePost
}