import BaseRepository from "../BaseRepository";

export default class EstadosReposiyory extends BaseRepository {
  constructor() {
    super({ table: "estados" });
  }
}
