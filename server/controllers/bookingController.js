const Booking = require('../models/Booking');
const Service = require('../models/Service');

// @desc    Get all bookings (Admin/Provider/User specific)
// @route   GET /api/bookings
// @access  Private
exports.getBookings = async (req, res, next) => {
  try {
    let query;

    // If provider, get their service bookings. If user, get their bookings.
    if (req.user.role === 'provider') {
      query = Booking.find({ provider: req.user.id }).populate({
        path: 'service',
        select: 'name category'
      }).populate({
        path: 'user',
        select: 'name email'
      });
    } else if (req.user.role === 'user') {
      query = Booking.find({ user: req.user.id }).populate({
        path: 'service',
        select: 'name'
      }).populate({
        path: 'provider',
        select: 'name email'
      });
    } else {
      query = Booking.find().populate('service user provider');
    }

    const bookings = await query;

    res.status(200).json({
      success: true,
      count: bookings.length,
      data: bookings
    });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// @desc    Create booking
// @route   POST /api/bookings
// @access  Private
exports.createBooking = async (req, res, next) => {
  try {
    const { serviceId, bookingDate } = req.body;

    const service = await Service.findById(serviceId);

    if (!service) {
      return res.status(404).json({ success: false, error: 'Service not found' });
    }

    const booking = await Booking.create({
      service: serviceId,
      user: req.user.id,
      provider: service.provider,
      bookingDate
    });

    res.status(201).json({
      success: true,
      data: booking
    });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// @desc    Update booking status
// @route   PUT /api/bookings/:id
// @access  Private
exports.updateBookingStatus = async (req, res, next) => {
  try {
    let booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({ success: false, error: 'Booking not found' });
    }

    // Only provider or admin can update status
    if (booking.provider.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(401).json({ success: false, error: 'Not authorized to update status' });
    }

    booking = await Booking.findByIdAndUpdate(req.params.id, { status: req.body.status }, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      success: true,
      data: booking
    });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};
