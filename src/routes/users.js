const express = require('express');
const router = express.Router();

const UserController = require('../controller/users');

//create - post
router.post('/', UserController.createNewUser);
//read - get
router.get('/', UserController.getAllUsers);
//update - patch
router.patch('/:id', UserController.updateUser);
//delete - delete
router.delete('/:id', UserController.deleteUser);




module.exports = router;