import { Direccion } from "../../types/secretarias";
import BaseRepository from "../BaseRepository";

export default class DireccionesRepository extends BaseRepository<Direccion> {
  constructor() {
    super("direcciones");
  }
}
