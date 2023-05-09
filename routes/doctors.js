const express = require("express");
const { getDoctors, getDoctorById, postDoctors } = require("../controllers/doctors");
const router = express.Router();

// https://localhost/doctors   GET POST
router.get("/", getDoctors);
router.get("/:id", getDoctorById);
router.post("/", postDoctors);


module.exports = router;