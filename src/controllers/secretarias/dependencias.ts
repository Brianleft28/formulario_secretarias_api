import { Request, Response } from "express";
import CoordinacionesRepository from "../../models/secretarias/CoordinacionesRepository.";
import DireccionesRepository from "../../models/secretarias/DireccionesRepository";
import JefaturasRepository from "../../models/secretarias/JefaturasRepository";
import SubsecretariasRepository from "../../models/secretarias/SubsecretariasRepository";

const coordinacionesRepository = new CoordinacionesRepository();
const direccionesRepository = new DireccionesRepository();
const jefaturasRepository = new JefaturasRepository();
const subsecretariasRepository = new SubsecretariasRepository();

export const getAllDependencias = async (req: Request, res: Response) => {
  try {
    const [coordinaciones, direcciones, jefaturas, subsecretarias] =
      await Promise.all([
        coordinacionesRepository.getAll(),
        direccionesRepository.getAll(),
        jefaturasRepository.getAll(),
        subsecretariasRepository.getAll(),
      ]);

    const dependencias = {
      coordinaciones,
      direcciones,
      jefaturas,
      subsecretarias,
    };
    return res.status(200).json({ dependencias });
  } catch (error) {
    console.error("Error getting all dependencias", error);
    res.status(500).json({ message: "Error getting all dependencias" });
  }
};
