import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import router from './routes/index';
const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);    
})

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(router)

