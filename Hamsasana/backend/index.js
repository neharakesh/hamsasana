import express from "express"
import dotenv from "dotenv"
import mongoose from 'mongoose'
import tutorRoute from './routes/tutor.route.js'

import cors from "cors"

import userRoute from './routes/user.route.js'

const app = express()

app.use(cors())
dotenv.config();


const PORT=process.env.PORT || 4000
const URI=process.env.MONGODB_URI
//connect to mongo DB

try{
    mongoose.connect(URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    });
    app.on("error",() =>{
        console.log("err",error);
        throw error
    })
    console.log("connected to mongo db")
}catch(error){
    console.log("error",error)
}


//defining routes
app.use("/tutor",tutorRoute)
app.use("/user",userRoute)


app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`)
})

