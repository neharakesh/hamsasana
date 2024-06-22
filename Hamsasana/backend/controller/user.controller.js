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
        res.status(201).json({message:"user created successfully"})
    }catch(error){
        console.log("error",error)
        res.status(500).json({message:"Internal server error"})
    }
}