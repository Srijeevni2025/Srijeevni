const express = require("express");
const router = express.Router();
const labControllers = require('./../Controllers/labControllers');

router.route('/').get(labControllers.getAllLabs).post(labControllers.createLab);
router.route('/:name').get(labControllers.getLabByName);
router.route('/addTest').patch(labControllers.addTestToLab);

module.exports = router;