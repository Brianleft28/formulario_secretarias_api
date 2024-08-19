import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import router from './routes/index';
import Server from './models/Server';

const server = new Server();

const app = express();

server.listen();
server.useMiddlewares();
app.use(express.json());
app.use(cors());
server.useRouter(router);



