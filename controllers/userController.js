import validator from 'validator';
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import userModel from '../models/userModel.js';

const  createToken = (id)=>{
    return jwt.sign({id}, process.env.JWT_SECRET)
}
//reoute for login user
const loginUser = async(req, res)=>{
try{
    const {email,password} = req.body;
    //checking user exist or not
    const user = await userModel.findOne({email});
    if(!user){
        return res.json({success:false,message:"User not found"});
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch){
        const token = createToken(user._id);
     res.json({success:true,token});
    }else{
        res.json({success:false,message:"Invalid credentials"});
    }
}catch(error){
    console.log(error);
    res.json({success:false,message:error.message});
}
}

//route for register user
const registerUser = async(req,res)=>{
try{
    const{name,email,password} = req.body;
    //checking user already exist or not
    const existingUser = await userModel.findOne({email});
    if(existingUser){
        return res.json({success:false,message:"User already exist"});
    }
    //validaing email format and password
    if(!validator.isEmail(email)){
        return res.json({success:false,message:"Please enter a valid email"});
    }
    if(password.length < 8){
        return res.json({success:false,message:"Password must be at least 8 characters long"});
    }
    //hashing password
    
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, 10);
    //creating new user
    const newUser = new userModel({
        name,
        email,
        password: hashedPassword
    })
    const user = await newUser.save();
    const token = createToken(user._id);
    res.json({success:true,token});
}catch(error){
    console.log(error);
    
    res.json({success:false,message:error.message});

}
}
//route for admin user
const adminUser = async(req,res)=>{

}

export{
    loginUser,
    registerUser,
    adminUser
}