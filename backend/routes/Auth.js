const express = require("express")

const authRoutes = express.Router();

authRoutes.post('/register', (req,res) => {
    res.send("Register Here!")
})

module.exports = authRoutes;