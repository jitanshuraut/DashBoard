import express from "express";
import { getUser, getDashboardStats,Login } from "../controllers/general.js";




const router = express.Router();

router.get("/user/:id", getUser);
router.get("/dashboard", getDashboardStats);
router.post("/login",  Login)


export default router;
