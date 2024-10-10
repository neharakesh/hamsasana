import express from "express";
import {signupTeacher} from "../controller/teacher.controller.js"
import { login } from "../controller/teacher.controller.js";
const router=express.Router()

router.post("/signupTeacher",signupTeacher)
router.post("/login",login)

export default router
