import { Dependencia } from "../../types/secretarias";
import BaseRepository from "../BaseRepository";

export default class DependenciasRepository extends BaseRepository<Dependencia> {
  constructor() {
    super("dependencias");
  }
}
