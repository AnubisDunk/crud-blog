const express = require('express');
const { getHome, getBlog, makePost, makePostForm, seedDB, getPost, editPost, editPostForm, deletePost } = require('../controllers/blog-controller');
const { validatePost } = require('../utils/validatePost');

const router = express.Router();

router.get('/', getHome);
router.get('/posts', getBlog);
router.get('/post/:id/edit', editPostForm);
router.put('/post/:id', editPost);
router.get('/makepost', makePostForm);
router.post('/makepost', makePost);
router.get('/post/:id', getPost);
router.delete('/post/:id', deletePost);
router.get('/seedDB', seedDB);


module.exports = router;