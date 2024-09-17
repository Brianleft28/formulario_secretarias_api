import MySqlAdapter from "../adapters/database/MySqlAdapter";
import mysql, { QueryResult } from "mysql2/promise";

export default class BaseRepository<T> {
  private entity: string;
  protected db: MySqlAdapter;

  constructor(entity: string) {
    this.entity = entity;
    this.db = MySqlAdapter.getInstance();
  }

  // CRUD methods
  async getAll(): Promise<T[]> {
    try {
      const tableName = mysql.escapeId(this.entity);
      const query = `SELECT * FROM ${tableName}`;
      const [rows] = await this.db.query(query);
      return rows as T[];
    } catch (error) {
      console.error("Error getting all entities", error);
      throw error;
    }
  }

  async getById(id: number): Promise<T[] | null> {
    try {
      const tableName = mysql.escapeId(this.entity);
      const query = `SELECT * FROM ${tableName} WHERE id = ?`;
      const [rows] = await this.db.query(query, [id]);
      return rows as T[];
    } catch (error) {
      console.error("Error getting entity by id", error);
      throw error;
    }
  }

  async update(id: number, data: Partial<T>): Promise<QueryResult> {
    try {
      const tableName = mysql.escapeId(this.entity);
      const setClause = Object.keys(data)
        .map((key) => `${mysql.escapeId(key)} = ?`)
        .join(", ");
      console.log("Set Clause:", setClause);
      const values = [...Object.values(data), id];
      const query = `UPDATE ${tableName} SET ${setClause} WHERE id = ?`;
      console.log("Query:", query);
      const [result] = await this.db.query(query, values);
      console.log("Result:", result);
      // Salida esperada: Result: { affectedRows: 1, ... }
      return result as QueryResult;
    } catch (error) {
      console.error("Error updating entity", error);
      throw error;
    }
  }

  async create(data: Partial<T>): Promise<QueryResult> {
    try {
      const tableName = mysql.escapeId(this.entity);
      console.log("Escaped Table Name:", tableName);
      // Salida esperada: Escaped Table Name: `secretarias`

      const columns = Object.keys(data)
        .map((key) => mysql.escapeId(key))
        .join(", ");
      console.log("Escaped Columns:", columns);
      // Salida esperada: Escaped Columns: `nombre`, `correo`,` telefono`

      const values = Object.values(data);
      console.log("Values:", values);
      // Salida esperada: Values: ['John Doe', 'john.doe@example.com', '1234567890']

      const placeholders = Object.keys(data)
        .map(() => "?")
        .join(", ");
      console.log("Placeholders:", placeholders);
      // Salida esperada: Placeholders: ?, ?, ?

      const query = `INSERT INTO ${tableName} (${columns}) VALUES (${placeholders})`;
      console.log("Query:", query);
      // Salida esperada: Query: INSERT INTO `secretarias` (`nombre`, `correo`, `telefono`) VALUES (?, ?)

      const [result] = await this.db.query(query, values);
      console.log("Result:", result);
      // Salida esperada: Result: { insertId: 1, affectedRows: 1, ... }
      return result;
    } catch (error) {
      console.error("Error creating entity", error);
      throw error;
    }
  }

  async delete(id: number): Promise<QueryResult> {
    try {
      const tableName = mysql.escapeId(this.entity);
      const query = `DELETE FROM ${tableName} WHERE id = ?`;
      const [rows] = await this.db.query(query, [id]);
      return rows;
    } catch (error) {
      console.error("Error deleting entity", error);
      throw error;
    }
  }
}
