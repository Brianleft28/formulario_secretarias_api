import { Router } from "express";
import { create, destroy, index, show, update } from "../controllers/jefaturas";

const router = Router();

router.get("/", index); // GET http://localhost:3000/api/v1/jefaturas
router.get("/:id", show); // GET http://localhost:3000/api/v1/jefaturas/:id
router.post("/", create); // POST http://localhost:3000/api/v1/jefaturas
router.put("/:id", update); // PUT http://localhost:3000/api/v1/jefaturas/:id
router.delete("/:id", destroy); // DELETE http://localhost:3000/api/v1/jefaturas/:id

export default router;
