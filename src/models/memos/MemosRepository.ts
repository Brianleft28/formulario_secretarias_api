import { Memo } from "../../types/memos";
import BaseRepository from "../BaseRepository";

export default class MemosRepository extends BaseRepository<Memo> {
  constructor() {
    super("memos");
  }
}
