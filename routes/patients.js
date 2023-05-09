const express = require("express");
const router = express.Router();

//https://localhost/patients GET,POST,DELETE,PUT

router.get("/", (req, res) => {
    const data = ["hola", "paciente"]

    res.send({data})
})


module.exports = router