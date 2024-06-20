import Tutor from "../modal/tutor.modal.js";
export const getTutor=async (req,res)=>{
    try{
        const tutor= await Tutor.find()
        res.status(200).json(tutor)
    }catch(error){
        console.log("Error",error)
        res.status(500).json(error)
    }
}