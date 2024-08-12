const userModel = require("../models/Auth");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
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
        res.status(200).json({ success: true, message: "User Registered Successfully",user:newUser});
    } catch (error) {
        console.error(error);
        res.status(500).send({ success: false, message: "Something Went Wrong"});
    }
}


const Login = async (req,res) => {
    try {
        const {email,password} = req.body
        const checkUser = await userModel.findOne({email})
        if(!checkUser){
            res.status(404).json({success: false, message: "User not Found"})
        }
        const comparePassword =  bcrypt.compare(password,checkUser.password);
        if(!comparePassword){
            res.status(303).json({success:false,message:"Invalid Credentials! Please try again"})
        }
        const token = jwt.sign({userId:checkUser._id},process.env.SECRET_KEY,{expiresIn:"3d"})
        res.cookie("token",token,{
            httpOnly:true,
            secure:false,
            maxAge:3 * 24 * 3600 * 1000
        })
        res.status(200).json({success:true,message:"Logged In Successfully",User:checkUser,token});

        
    } catch (error) {
       return  res.status(500).json({success:false,message:"Something went wrong"})
    }
}

const Logout =  async(req,res) => {
    try {
        res.clearCookie("token")
        res.status(200).json({success:true,message:"Logged Out Successfully"});
    } catch (error) {
        return res.status(500).json({success:false,message:"Something went wrong"})
    }
}
module.exports = {Register,Login,Logout}