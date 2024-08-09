const userModel = require("../models/Auth");
const bcrypt = require("bcryptjs")
const Register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(303).json({ success: false, message: "User already exists! Please Login" });
        }
        const hashPassword = bcrypt.hashSync(password,10)
        const newUser = new userModel({
            username,
            email,
            password:hashPassword
        });
        await newUser.save();
        res.status(200).json({ success: true, message: "User Registered Successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ success: false, message: "Something Went Wrong" });
    }
}


const Login = async (req,res) => {
    res.send('Login with controller')
}
module.exports = {Register,Login}