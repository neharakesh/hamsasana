import bcrypt from 'bcryptjs/dist/bcrypt.js';
import User from '../modal/user.modal.js'
import bcryptjs from 'bcryptjs'
export const signup=async (req,res)=>{
    try{
        const {fullName,emailId,password}=req.body;
        const user= await User.findOne({emailId})
        if(user){
            return res.status(400).json({message:"user already exist"})
        }
        //encrypting password
        const hashPassword=await bcryptjs.hash(password,10)
        const createdUser=new User({
            fullName:fullName,
            emailId:emailId,
            password:hashPassword
        
        })
        await createdUser.save()
        res.status(201).json({message:"user created successfully",user:{
            _id:createdUser._id,
            fullName:createdUser.fullName,
            email:createdUser.emailId
        }})
    }catch(error){
        console.log("error",error)
        res.status(500).json({message:"Internal server error"})
    }
}


//login
export const login=async (req,res)=>{
    try{
        const {emailId,password}=req.body;
        const user=await User.findOne({emailId});
        const isMatch= await bcryptjs.compare(password,user.password)
        if(!user || !isMatch){
            return res.status(400).json({message:"invalid username or password"})
        }else{
            res.status(200).json({message:"logged in successfully",user:{
            _id:user._id,
            fullName:user.fullName,
            emailId:user.emailId
        }})
        }
    }catch(error){
        console.log("error",error)
    }
}