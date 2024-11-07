// routes/userRoutes.js
const express = require('express');
const { loginUser } = require('../controllers/user.controllers');

const router = express.Router();


router.get('/', loginUser);

module.exports = router;
