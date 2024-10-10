import mongoose from 'mongoose'
const teacherSchema=mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    emailId:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
        
    },
    mobileNum:{
        type:String,
        required:true
        
    },
    description:{
        type:String,
        required:true
        
    },
    Subject:{
        type:String,
        required:true
        
    },
    link:{
        type:String,
        required:true
        
    },
    details:{
        type:String,
        required:true
        
    },
    
    
    
})
const Teacher=mongoose.model("Teacher",teacherSchema)
export default Teacher