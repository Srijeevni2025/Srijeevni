const express = require("express");

const userControllers = require("./../Controllers/userControllers");
const authControllers = require('./../Controllers/authControllers');
const router = express.Router();
console.log("called user router")
router.post("/signup", authControllers.register, authControllers.verifyAndSign);
router.route('/').post(userControllers.createUser).get(userControllers.getAllUsers);

module.exports = router;