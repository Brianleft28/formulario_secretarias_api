import { Router } from "express";
import {
  create,
  destroy,
  index,
  show,
  update,
} from "../controllers/secretarias/dependencias";

const router = Router();

router.get("/", index); // GET http://localhost:3000/api/v1/secretarias/dependencias
router.get("/:id", show); // GET http://localhost:3000/api/v1/secretarias/dependencias/:id
router.post("/", create); // POST http://localhost:3000/api/v1/secretarias/dependencias
router.put("/:id", update); // PUT http://localhost:3000/api/v1/secretarias/dependencias/:id
router.delete("/:id", destroy); // DELETE http://localhost:3000/api/v1/secretarias/dependencias/:id

export default router;
