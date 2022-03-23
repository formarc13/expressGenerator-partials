const express = require('express');
const router = express.Router();
const controller = require('../controllers/indexController')

/* GET home page. */
router.get('/', controller.index);
/* GET product detail */
router.get('/producto/:id', controller.detail)

module.exports = router;
