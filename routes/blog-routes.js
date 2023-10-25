const express = require('express');
const { getBlog, makePost, makePostForm, seedDB, getPost, editPost, editPostForm, deletePost } = require('../controllers/blog-controller');

const router = express.Router();

router.get('/', getBlog);

router.get('/post/:id/edit', editPostForm);
router.put('/post/:id', editPost);
router.get('/makepost', makePostForm);
router.post('/makepost', makePost);
router.get('/post/:id', getPost);
router.delete('/post/:id', deletePost);
router.get('/seedDB', seedDB);

module.exports = router;