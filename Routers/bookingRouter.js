const express = require("express");
const router = express.Router();
const bookingControllers = require("./../Controllers/bookingControlleres");
router.route('/').post(bookingControllers.createBooking).get(bookingControllers.getAllBookings);

module.exports = router;