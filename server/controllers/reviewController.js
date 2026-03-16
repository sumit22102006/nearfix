const Review = require('../models/Review');
const Service = require('../models/Service');

// @desc    Get reviews for a service
// @route   GET /api/reviews/service/:serviceId
// @access  Public
exports.getReviews = async (req, res, next) => {
  try {
    const reviews = await Review.find({ service: req.params.serviceId }).populate({
      path: 'user',
      select: 'name'
    });

    res.status(200).json({
      success: true,
      count: reviews.length,
      data: reviews
    });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// @desc    Add review
// @route   POST /api/reviews/service/:serviceId
// @access  Private
exports.addReview = async (req, res, next) => {
  try {
    req.body.service = req.params.serviceId;
    req.body.user = req.user.id;

    const service = await Service.findById(req.params.serviceId);

    if (!service) {
      return res.status(404).json({ success: false, error: 'Service not found' });
    }

    const review = await Review.create(req.body);

    res.status(201).json({
      success: true,
      data: review
    });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};
