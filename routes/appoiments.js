const express = require("express");
const { getAppoiments, getAppoimentById, postAppoiment } = require("../controllers/appoiments");
const router = express.Router();

//http://localhost/appoiments GET, POST, PUT, DELETE
router.get("/", getAppoiments);
router.get("/:id", getAppoimentById);
router.post("/", postAppoiment);

module.exports = router;