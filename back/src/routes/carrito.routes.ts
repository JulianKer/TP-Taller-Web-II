import express from 'express';
import { getCarritosHistorico } from '../controllers/carritoController';
import { getCarritoActivo } from '../controllers/carritoController';

const routerCarrito = express.Router();

routerCarrito.get('/obtenerCarritosHistorico/:id', getCarritosHistorico);
routerCarrito.get('/obtenerCarritoActivo/:id', getCarritoActivo);

export default routerCarrito;