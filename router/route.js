import { Router } from "express";
import { signUpUser, userLogin } from "../controllers/controllers.js";



export  const router = Router();

router.post('/signup',signUpUser);
router.post('/login',userLogin)