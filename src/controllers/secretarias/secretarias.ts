import { Request, Response } from "express";
import SecretariasRepository from "../../models/secretarias/SecretariasRepository";

const secretariasRepository = new SecretariasRepository();

export const index = async (req: Request, res: Response) => {
  try {
    const response = await secretariasRepository.getAll();
    return res.status(200).json(response);
  } catch (error) {
    console.error("Error getting all secretarias", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const show = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const response = await secretariasRepository.getById(id);
    return res.status(200).json(response);
  } catch (error) {
    console.error("Error getting secretaria by id", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const response = await secretariasRepository.create(req.body);
    return res.status(200).json(response);
  } catch (error) {
    console.error("Error creating secretaria", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const response = await secretariasRepository.update(id, req.body);
    return res.status(200).json(response);
  } catch (error) {
    console.error("Error updating secretaria", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const destroy = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const response = await secretariasRepository.delete(id);
    return res.status(200).json(response);
  } catch (error) {
    console.error("Error deleting secretaria", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
