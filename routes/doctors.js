const express = require("express");
const { getDoctors, getDoctorById, postDoctor } = require("../controllers/doctors");
const router = express.Router();

//http://localhost/doctors GET, POST, PUT, DELETE
router.get("/", getDoctors);
router.get("/:id", getDoctorById);
router.post("/", postDoctor);

module.exports = router;