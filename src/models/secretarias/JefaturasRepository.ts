import BaseRepository from "../BaseRepository";

export default class JefaturasRepository extends BaseRepository {
  constructor() {
    super({ table: "jefaturas" });
  }
}
