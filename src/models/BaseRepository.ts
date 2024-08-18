import MySqlAdapter from "../adapters/database/MySqlAdapter";
import mysql from 'mysql2/promise';

export default class BaseRepository {
    private entity: any;
    private db: MySqlAdapter;


    constructor(entity: any){
        this.entity = entity;
        this.db = MySqlAdapter.getInstance();
    }


    // CRUD methods
    async getAll() {
        try {
            const tableName = mysql.escapeId(this.entity.table);
            const query = `SELECT * FROM ${tableName}`;
            const [rows] = await this.db.query(query);
            return rows;
        } catch (error) {
            console.error("Error getting all entities", error);
            return error;
        }
    }

    async getById(id: number) {
        try {
            const tableName = mysql.escapeId(this.entity.table);
            const query = `SELECT * FROM ${tableName} WHERE id = ?`;
            const [rows] = await this.db.query(query, [id]);
            return rows;
        } catch (error) {
            console.error("Error getting entity by id", error);
            return error;
        }
    }

    async update(id: number, data: any) {
        try {
            const tableName = mysql.escapeId(this.entity.table);
            console.log('Escaped Table Name:', tableName);
            // Salida esperada: Escaped Table Name: `secretarias`

            const setClause = Object.keys(data).map(key => `${mysql.escapeId(key)} = ?`).join(', ');
            console.log('Set Clause:', setClause);
            // Salida esperada: Set Clause: `name` = ?, `email` = ?

            const values = [...Object.values(data), id];
            console.log('Values:', values);
            // Salida esperada: Values: ['John Doe', 'john.doe@example.com', 1]

            const query = `UPDATE ${tableName} SET ${setClause} WHERE id = ?`;
            console.log('Query:', query);
            // Salida esperada: Query: UPDATE `secretarias` SET `name` = ?, `email` = ? WHERE id = ?

            const [result] = await this.db.query(query, values);
            console.log('Result:', result);
            // Salida esperada: Result: { affectedRows: 1, ... }
            return result;
        } catch (error) {
            console.error("Error updating entity", error);
            return error;
        }
    }

    async create(data: any) {
        try {
            const tableName = mysql.escapeId(this.entity.table);
            console.log('Escaped Table Name:', tableName);
            // Salida esperada: Escaped Table Name: `secretarias`
    
            const columns = Object.keys(data).map(key => mysql.escapeId(key)).join(', ');
            console.log('Escaped Columns:', columns);
            // Salida esperada: Escaped Columns: `nombre`, `correo`,` telefono`
    
            const values = Object.values(data);
            console.log('Values:', values);
            // Salida esperada: Values: ['John Doe', 'john.doe@example.com', '1234567890']
    
            const placeholders = Object.keys(data).map(() => '?').join(', ');
            console.log('Placeholders:', placeholders);
            // Salida esperada: Placeholders: ?, ?, ?
    
            const query = `INSERT INTO ${tableName} (${columns}) VALUES (${placeholders})`;
            console.log('Query:', query);
            // Salida esperada: Query: INSERT INTO `secretarias` (`nombre`, `correo`, `telefono`) VALUES (?, ?)
    
            const [result] = await this.db.query(query, values);
            console.log('Result:', result);
            // Salida esperada: Result: { insertId: 1, affectedRows: 1, ... }
            return result;
        } catch (error) {
            console.error("Error creating entity", error);
            return error;
        }
    }

    async delete(id: number) {
        try {
            const tableName = mysql.escapeId(this.entity.table);
            const query = `DELETE FROM ${tableName} WHERE id = ?`;
            const [rows] = await this.db.query(query, [id]);
            return rows;
        } catch (error) {
            console.error("Error deleting entity", error);
            return error;
        }
    }
}