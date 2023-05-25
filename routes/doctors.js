const express = require("express");
const { getDoctors, getDoctorsBySpecialty, postDoctor, putDoctor, deleteDoctor } = require("../controllers/doctors");
const router = express.Router();

// http://localhost/doctors GET, POST, PUT, DELETE
router.get("/", getDoctors);
router.get("/:specialty", getDoctorsBySpecialty);
router.post("/", postDoctor);
router.put("/:id", putDoctor);
router.delete("/:id", deleteDoctor);

module.exports = router;