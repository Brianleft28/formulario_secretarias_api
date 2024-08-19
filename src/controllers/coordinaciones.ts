import { Request, Response } from "express";
import CoordinacionesRepository from "../models/CoordinacionesRepository.";

const coordinacionesRepository = new CoordinacionesRepository();

export const index = async (req: Request, res: Response) => {
    try {
        const response = await coordinacionesRepository.getAll() 
        return res.status(200).json(response);
        
    } catch (error) {
        console.error("Error getting all secretarias", error);
        return res.status(500).json({message: "Internal server error"});
    }
}

export const show = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const response = await coordinacionesRepository.getById(id);
        return res.status(200).json(response);
    } catch (error) {
        console.error("Error getting secretaria by id", error);
        return res.status(500).json({message: "Internal server error"});
    }
}

export const create = async (req: Request, res: Response) => {
    try {
        const response = await coordinacionesRepository.create(req.body);
        return res.status(200).json(response);
    } catch (error) {
        console.error("Error creating secretaria", error);
        return res.status(500).json({message: "Internal server error"});
    }
}

export const update = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const response = await coordinacionesRepository.update(id, req.body);
        return res.status(200).json(response);
    } catch (error) {
        console.error("Error updating secretaria", error);
        return res.status(500).json({message: "Internal server error"});
    }
}

export const destroy = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const response = await coordinacionesRepository.delete(id);
        return res.status(200).json(response);
    } catch (error) {
        console.error("Error deleting secretaria", error);
        return res.status(500).json({message: "Internal server error"});
    }
}