import { Router } from "express";
import {
  create,
  destroy,
  index,
  show,
  update,
} from "../controllers/subsecretarias";

const router = Router();

router.get("/", index); // GET http://localhost:3000/subsecretarias
router.get("/:id", show); // GET http://localhost:3000/subsecretarias/:id
router.post("/", create); // POST http://localhost:3000/subsecretarias
router.put("/:id", update); // PUT http://localhost:3000/subsecretarias/:id
router.delete("/:id", destroy); // DELETE http://localhost:3000/subsecretarias/:id

export default router;
