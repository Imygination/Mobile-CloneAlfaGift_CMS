const express = require('express');
const router = express.Router();
const ConUser = require('../controllers/user');
const authen = require('../middleware/authentification');
const ConItem = require('../controllers/item');
const ConCategory = require('../controllers/category');

router.post('/login', ConUser.loginUser)


router.use(authen)

router.post('/item', ConItem.createItem)
router.get('/item', ConItem.showItem)
router.put('/item/:id', ConItem.updateItem)
router.delete('/item/:id', ConItem.deleteItem)

router.post('/category', ConCategory.createCategory)
router.get('/category', ConCategory.showCategory)
router.put('/category', ConCategory.updateCategory)
router.delete('/category', ConCategory.deleteCategory)

router.post('/register', ConUser.createUser)

module.exports = router;