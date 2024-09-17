import { Router } from "express";
import { getAllDependencias } from "../controllers/secretarias/dependencias";

const router = Router();

router.get("/", getAllDependencias); // GET http://localhost:3000/api/v1/secretarias/dependencias

export default router;
