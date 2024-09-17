import { Estado } from "../../types/memos";
import BaseRepository from "../BaseRepository";

export default class EstadosReposiyory extends BaseRepository<Estado> {
  constructor() {
    super("estados");
  }
}
