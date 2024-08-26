import { Router } from "express";
import {
  create,
  destroy,
  index,
  show,
  update,
} from "../controllers/memos/memosController";

const router = Router();
router.get("/", index); // GET http://localhost:3000/api/v1/direciones
router.get("/:id", show); // GET http://localhost:3000/api/v1/direciones/:id
router.post("/", create); // POST http://localhost:3000/api/v1/direciones
router.put("/:id", update); // PUT http://localhost:3000/api/v1/direciones/:id
router.delete("/:id", destroy); // DELETE http://localhost:3000/api/v1/direciones/:id

export default router;
