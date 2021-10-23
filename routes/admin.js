var express = require('express');
var router = express.Router();

const adminControllers = require('../controllers/admin');

/* GET home page. */
router.get('/add-article', adminControllers.getArticle);

router.post('/add-article',adminControllers.postArticle);

router.get('/add-author', adminControllers.getAuthor);

router.post('/add-author', adminControllers.postAuthor);





module.exports = router;
