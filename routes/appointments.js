const express = require("express");
const { getappointments, getAppoimentById, postAppoiment } = require("../controllers/appointments");
const router = express.Router();

//http://localhost/appointments GET, POST, PUT, DELETE
router.get("/", getappointments);
router.get("/:id", getAppoimentById);
router.post("/", postAppoiment);

module.exports = router;