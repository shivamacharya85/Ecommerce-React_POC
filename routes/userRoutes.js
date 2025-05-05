const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');

router.post('/register', controller.register);
router.post('/login', controller.login);
router.put('/:id', controller.updateUser);
router.delete('/:id', controller.deleteUser);

module.exports = router;
