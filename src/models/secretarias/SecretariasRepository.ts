import { Secretaria } from "../../types/secretarias";
import BaseRepository from "../BaseRepository";

export default class SecretariasRepository extends BaseRepository<Secretaria> {
  constructor() {
    super("secretarias");
  }

  // Custom methods
  async getAllSecretarias() {
    try {
      const query = `SELECT id, nombre, correo, telefono FROM secretarias`;
      const [rows] = await this.db.query(query);
      return rows as Secretaria[];
    } catch (err) {
      console.error("Error getting all secretarias", err);
      throw err;
    }
  }
}
