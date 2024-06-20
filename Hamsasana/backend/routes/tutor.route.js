import express from 'express'
import {getTutor} from '../controller/tutor.controller.js'
const router=express.Router()
router.get("/",getTutor)
export default router;