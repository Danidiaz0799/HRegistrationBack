const express = require("express");
const { getPatients, getPatientById } = require("../controllers/patients");
const router = express.Router();

//https://localhost/patients GET,POST,DELETE,PUT

router.get("/", getPatients);
router.get("/:id", getPatientById);


module.exports = router;