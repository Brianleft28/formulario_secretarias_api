import { Router } from 'express';
import { index } from '../controllers/secretarias';

const router = Router();

router.get('/', index); // GET http://localhost:3000/secretarias



export default router;