const express = require('express');
const router = express.Router();
const user = require('../controllers/user_controller');


router.post('/register/', user.registration);

module.exports = router;
