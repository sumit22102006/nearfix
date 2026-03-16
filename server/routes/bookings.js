const express = require('express');
const {
  getBookings,
  createBooking,
  updateBookingStatus
} = require('../controllers/bookingController');

const router = express.Router();

const { protect } = require('../middleware/auth');

router.use(protect);

router
  .route('/')
  .get(getBookings)
  .post(createBooking);

router
  .route('/:id')
  .put(updateBookingStatus);

module.exports = router;
