import BaseRepository from "../BaseRepository";

export default class CoordinacionesRepository extends BaseRepository {
  constructor() {
    super({ table: "coordinaciones" });
  }
}
