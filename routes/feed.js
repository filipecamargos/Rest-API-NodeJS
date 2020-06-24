const express = require("express");

const feedConstroller = require('../controllers/feed')

const router = express.Router();

router.get('/api', feedConstroller.getPost)

module.exports = router;