import { Jefatura } from "../../types/secretarias";
import BaseRepository from "../BaseRepository";

export default class JefaturasRepository extends BaseRepository<Jefatura> {
  constructor() {
    super("jefaturas");
  }
}
