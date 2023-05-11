const express = require("express");
const { getPatients, getPatientById, postPatient } = require("../controllers/patients");
const router = express.Router();

//http://localhost/patients GET, POST, PUT, DELETE
router.get("/", getPatients);
router.get("/:id", getPatientById);
router.post("/", postPatient);

module.exports = router;