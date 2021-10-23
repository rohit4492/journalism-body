var express = require('express');
var router = express.Router();

const clientControllers = require('../controllers/client');

/* GET home page. */
router.get('/', clientControllers.getHome);

router.get('/articles/:articleid',clientControllers.getArticle);

router.get('/about', clientControllers.getAbout);

router.get('/alumni', clientControllers.getAlumni);

router.get('/author', clientControllers.getAuthors);

router.get('/tech-articles', clientControllers.getTech);

router.get('/sports-articles', clientControllers.getSports);

router.get('/cult-articles', clientControllers.getCult);

router.get('/authors/:authorid',clientControllers.getAuthor);

// router.get('/auth/google',clientControllers.getLogin);

// router.get('/auth/google/callback',clientControllers.getCall);

router.post('/add-comment',clientControllers.postComment);

module.exports = router;
