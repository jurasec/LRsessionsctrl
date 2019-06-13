const express = require('express');
const router = express.Router();

const user = require('../Controllers/user.controller');
router.get('/' , user.getUser );
router.post('/',user.createUser);
router.get('/:id', user.getOneUser);
router.put('/:id', user.editUser);
router.delete('/:id', user.deleteUser);
module.exports = router;
