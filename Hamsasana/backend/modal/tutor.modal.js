import mongoose from "mongoose";
const tutorSchema=mongoose.Schema({
    name:String,
    description:String,
    price:Number,
    subject:String,
    rating:Number,
    

})
const Tutor=mongoose.model("Tutor",tutorSchema)
export default Tutor