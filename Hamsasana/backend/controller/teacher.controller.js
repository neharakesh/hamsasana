import Teacher from "../modal/teacher.modal.js";
import bcrypt from 'bcryptjs/dist/bcrypt.js';

import bcryptjs from 'bcryptjs'
export const signupTeacher= async (req,res)=>{
    try{
        const {fullName,emailId,mobileNum,description,subject,link,details,password}=req.body;
        const teacher= await Teacher.findOne({emailId})
        if(teacher){
            return res.status(400).json({message:"user already exist"})
        }
        //encrypting password
        const hashPassword=await bcryptjs.hash(password,10)
        const createdUser=new Teacher({
            fullName:fullName,
            emailId:emailId,
            password:hashPassword,
            mobileNum:mobileNum,
            description:description,
            subject:subject,
            link:link,
            details:details,
            password:password
        
        })
        await createdUser.save()
        res.status(201).json({message:"user created successfully",user:{
            _id:createdUser._id,
            fullName:createdUser.fullName,
            email:createdUser.emailId,
            mobileNum:createdUser.mobileNum,
            description:createdUser.description,
            subject:createdUser.subject,
            link:createdUser.link,
            details:createdUser.details,
            password:createdUser.password
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
        const teacher=await Teacher.findOne({emailId});
        const isMatch= await bcryptjs.compare(password,user.password)
        if(!teacher || !isMatch){
            return res.status(400).json({message:"invalid username or password"})
        }else{
            res.status(200).json({message:"logged in successfully",teacher:{
            _id:user._id,
            fullName:user.fullName,
            emailId:user.emailId
        }})
        }
    }catch(error){
        console.log("error",error)
    }
}

