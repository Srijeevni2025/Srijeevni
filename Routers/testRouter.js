const express = require("express");
const router = express.Router();
const testControllers = require('./../Controllers/testControllers');


router.route('/').post(testControllers.createTest).get(testControllers.getAllTests);

module.exports = router;