const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/destinations')

router.post('/flights/:id/destinations', destinationsCtrl.create )

module.exports = router;