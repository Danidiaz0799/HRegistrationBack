const express = require("express");
const { getDoctors, getDoctorsBySpecialty, postDoctor } = require("../controllers/doctors");
const router = express.Router();

// http://localhost/doctors GET, POST, PUT, DELETE
router.get("/", getDoctors);
router.get("/:specialty", getDoctorsBySpecialty); 
router.post("/", postDoctor);

module.exports = router;

