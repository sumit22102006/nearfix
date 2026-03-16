const express = require('express');
const {
  getReviews,
  addReview
} = require('../controllers/reviewController');

const router = express.Router({ mergeParams: true });

const { protect } = require('../middleware/auth');

router
  .route('/service/:serviceId')
  .get(getReviews)
  .post(protect, addReview);

module.exports = router;
