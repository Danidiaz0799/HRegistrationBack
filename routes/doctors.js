const express = require("express");
const { getDoctors, getDoctorById } = require("../controllers/doctors");
const router = express.Router();

// https://localhost/doctors   GET POST
router.get("/", getDoctors);
router.get("/:id", getDoctorById);


module.exports = router;