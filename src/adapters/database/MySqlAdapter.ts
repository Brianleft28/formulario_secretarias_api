import mysql from "mysql2/promise"; // Asegúrate de usar la versión de promesas de mysql2
import { config } from "../../config"; // Asegúrate de tener dotenv instalado

class MySqlAdapter {
  private connection: mysql.Connection | null = null;
  static instance: InstanceType<typeof MySqlAdapter> | null = null;

  constructor(config: any) {
    this.#connect(config);
  }

  static getInstance() {
    if (!MySqlAdapter.instance) {
      MySqlAdapter.instance = new MySqlAdapter(config);
    }
    return MySqlAdapter.instance;
  }

  async #connect(config: any) {
    try {
      this.connection = await mysql.createConnection({
        host: config.db.host,
        user: config.db.user,
        password: config.db.password,
        database: config.db.database,
      });
      console.log(
        `Connected to database ${config.db.database}, welcome user ${config.db.user}`
      );
    } catch (err) {
      console.error("Error connecting to database", err);
    }
  }
  /* Query */
  async executeQuery(sql: string, params: any[] = []) {
    if (!this.connection) {
      throw new Error("Database connection not established");
    }

    try {
      const [rows] = await this.connection.query(sql, params);
      return rows;
    } catch (error) {
      console.error("Error executing query", error);
      throw error;
    }
  }
}
export default MySqlAdapter;
