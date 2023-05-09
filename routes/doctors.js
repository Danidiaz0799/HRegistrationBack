const express = require("express")
const router = express.Router();

// https://localhost/doctors   GET POST
router.get("/", (req, res) => {
    const data = ["Hola", "doctor"]

    res.send({data})
})


module.exports = router