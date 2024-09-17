import { Coordinacion } from "../../types/secretarias";
import BaseRepository from "../BaseRepository";

export default class CoordinacionesRepository extends BaseRepository<Coordinacion> {
  constructor() {
    super("coordinaciones");
  }
}
