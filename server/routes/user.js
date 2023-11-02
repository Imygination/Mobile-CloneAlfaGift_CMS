const express = require('express');
const router = express.Router();
const ConUser = require('../controllers/user');
const authen = require('../middleware/authentification');
const ConItem = require('../controllers/item');

router.post('/login', ConUser.loginUser)

router.use(authen)
router.post('/item', ConUser)
router.get('/item', ConItem.showItem)
router.put('/item', ConUser)
router.delete('/item', ConUser)

router.post('/category', ConUser)
router.get('/category', ConUser)
router.put('/category', ConUser)
router.delete('/category', ConUser)

router.post('/register', ConUser.createUser)

module.exports = router;