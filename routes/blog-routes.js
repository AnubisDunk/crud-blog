const express = require('express');
const { getBlog } = require('../controllers/blog-controller');

const router = express.Router();

router.get('/', getBlog);

module.exports = router;