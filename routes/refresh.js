const express = require('express');
const router = express.Router();
const RefreshController = require('../controllers/refreshTokenContoller');

router.get('/', RefreshController.handleRefreshToken);

module.exports = router;