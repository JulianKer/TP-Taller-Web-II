import express from 'express';
import { getPerfil } from '../controllers/perfilController';

const router = express.Router();

router.get('/:id', getPerfil);

export default router;