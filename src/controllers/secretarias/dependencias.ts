import { Request, Response } from "express";
import DependenciasRepository from "../../models/secretarias/DependenciasRepository";

const dependenciasRepository = new DependenciasRepository();

export const index = async (req: Request, res: Response) => {
  try {
    const response = await dependenciasRepository.getAll();
    return res.status(200).json(response);
  } catch (error) {
    console.error("Error getting all dependencias", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const show = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const response = await dependenciasRepository.getById(id);
    return res.status(200).json(response);
  } catch (error) {
    console.error("Error getting dependencia by id", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const response = await dependenciasRepository.create(req.body);
    return res.status(200).json(response);
  } catch (error) {
    console.error("Error creating dependencia", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const response = await dependenciasRepository.update(id, req.body);
    return res.status(200).json(response);
  } catch (error) {
    console.error("Error updating dependencia", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const destroy = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const response = await dependenciasRepository.delete(id);
    return res.status(200).json(response);
  } catch (error) {
    console.error("Error deleting dependencia", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
