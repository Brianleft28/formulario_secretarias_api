import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import router from './routes/index';
import Server from './models/Server';
const PORT = process.env.PORT || 3000;

const server = new Server();
server.useMiddlewares();
server.useRouter(router);
server.listen();

const app = express();

app.use(express.json());

