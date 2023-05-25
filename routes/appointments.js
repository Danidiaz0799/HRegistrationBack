const express = require("express");
const { getappointments, getAppointmentById, postAppointment, putAppointment, deleteAppointment } = require("../controllers/appointments");
const router = express.Router();

//http://localhost/appointments GET, POST, PUT, DELETE
router.get("/", getappointments);
router.get("/:id", getAppointmentById);
router.post("/", postAppointment);
router.put("/:id", putAppointment);
router.delete("/:id", deleteAppointment);

module.exports = router;