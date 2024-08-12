const express = require("express");
const { Register, Login, Logout} = require("../controllers/Auth");
const authRoutes = express.Router();

authRoutes.post('/register', Register)
authRoutes.post('/signIn', Login)
authRoutes.post('/logOut', Logout)

module.exports = authRoutes;





