const express = require('express');
const router = express.Router();
const ConCustomer = require('../controllers/customer');
const ConArticle = require('../controllers/article');
const authen = require('../middleware/authentification');
const ConBookmark = require('../controllers/bookmark');


router.post('/register', ConCustomer.createCustomer)
router.post('/login', ConCustomer.loginCustomer)
router.post('/googleSignIn', ConCustomer.googleSignIn)

router.get('/articles', ConArticle.showArticleCustomer)
router.get('/articles/:id', ConArticle.showArticleDetail)

router.use(authen)
router.get('/bookmarks', ConBookmark.showBookmark)
router.post('/bookmarks/:ArticleId', ConBookmark.addBookmark)

module.exports = router;