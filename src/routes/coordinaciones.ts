import { Router } from "express";
import {
  create,
  destroy,
  index,
  show,
  update,
} from "../controllers/secretarias/coordinaciones";

const router = Router();
router.get("/", index); // GET http://localhost:3000/api/v1/coordinaciones
router.get("/:id", show); // GET http://localhost:3000/api/v1/coordinaciones/:id
router.post("/", create); // POST http://localhost:3000/api/v1/coordinaciones
router.put("/:id", update); // PUT http://localhost:3000/api/v1/coordinaciones/:id
router.delete("/:id", destroy); // DELETE http://localhost:3000/api/v1/coordinaciones/:id

export default router;
