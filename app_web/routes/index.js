const express = require('express');
const router = express.Router();
const index = require('../controller/IndexController');

/* GET home page. */
router.get('/', index.index);

/* GET Seconde Page */
router.get('/about', index.aboutPage);

module.exports = router;
