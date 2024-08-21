import "dotenv/config";
import express from "express";
import cors from "cors";
import router from "./routes/index";
import Server from "./models/Server";

const server = new Server();

const app = express();

server.config();
server.app.use(cors());
app.use(express.json());
server.useRouter(router);

// Iniciar el servidor
server.listen();
