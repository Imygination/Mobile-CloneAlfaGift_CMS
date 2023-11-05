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
router.get('/category/:id', ConCategory.showCategoryById)
router.put('/category/:id', ConCategory.updateCategory)
router.delete('/category/:id', ConCategory.deleteCategory)

router.post('/register', ConUser.createUser)

module.exports = router;