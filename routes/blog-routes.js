const express = require('express');
const { getBlog, makePost } = require('../controllers/blog-controller');

const router = express.Router();

router.get('/', getBlog);

router.get('/makepost', makePost);

module.exports = router;