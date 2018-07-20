const router = require('express').Router;
const User = require('../controllers/userController')

// user router
router.get('/list', User.list);


module.exports = router;