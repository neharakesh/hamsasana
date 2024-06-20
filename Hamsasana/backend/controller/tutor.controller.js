import Tutor from "../modal/tutor.modal";
export const getTutor=async (req,res)=>{
    try{
        const tutor= await tutor.find()
        res.status(200).json(tutor)
    }catch(error){
        console.log("Error",error)
        res.status(500).json(error)
    }
}