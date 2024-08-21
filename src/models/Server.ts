import express, { Application, Router } from "express";

class Server {
  public app: Application;
  private port: string;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "3000";
    this.config();
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server is running at http://localhost:${this.port}`);
    });
  }

  config() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  useRouter(router: Router) {
    this.app.use(router);
  }
}

export default Server;
