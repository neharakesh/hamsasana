import User from '../modal/user.modal.js'

export const signup=(req,res)=>{
    try{
        const {fullName,email,password}=req.body;
        const user=USer.findOne({email})
        if(user){
            return res.status(400).json({message:"user already exist"})
        }
        const createdUser=new User({
            fullName,
            emailId,
            password
        
        })
        createdUser.save()
        res.status(201).json({message:"user created successfully"})
    }catch(error){
        console.log("error",error)
        res.status(500).json({message:"Internal server error"})
    }
}