const express = require("express");
const { Register, Login} = require("../controllers/Auth");
const authRoutes = express.Router();

authRoutes.post('/register', Register)
authRoutes.post('/signIn', Login)

module.exports = authRoutes;





