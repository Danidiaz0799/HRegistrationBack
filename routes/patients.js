const express = require("express");
const { getPatients, getPatientById, postPatient, putPatient, deletePatient } = require("../controllers/patients");
const router = express.Router();

//http://localhost/patients GET, POST, PUT, DELETE
router.get("/", getPatients);
router.get("/:id", getPatientById);
router.post("/", postPatient);
router.put("/:id", putPatient);
router.delete("/:id", deletePatient);

module.exports = router;