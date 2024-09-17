import { Subsecretaria } from "../../types/secretarias";
import BaseRepository from "../BaseRepository";

export default class SubsecretariasRepository extends BaseRepository<Subsecretaria> {
  constructor() {
    super("subsecretaria");
  }
}
