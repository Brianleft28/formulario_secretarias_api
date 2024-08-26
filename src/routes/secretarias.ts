import { Router } from "express";
import {
  create,
  destroy,
  index,
  show,
  update,
} from "../controllers/secretarias/secretarias";

const router = Router();

router.get("/", index); // GET http://localhost:3000/api/v1/secretarias
router.get("/:id", show); // GET http://localhost:3000/api/v1/secretarias/:id
router.post("/", create); // POST http://localhost:3000/api/v1/secretarias
router.put("/:id", update); // PUT http://localhost:3000/api/v1/secretarias/:id
router.delete("/:id", destroy); // DELETE http://localhost:3000/api/v1/secretarias/:id

export default router;
