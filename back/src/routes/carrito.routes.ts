import express from 'express';
import { getCarritosHistorico } from '../controllers/carritoController';
//import { obtenerCarritoActivo } from '../controllers/carritoController';

const routerCarrito = express.Router();

routerCarrito.get('/obtenerCarritosHistorico/:id', getCarritosHistorico);
// routerCarrito.get('/obtenerCarritoActivo', obtenerCarritoActivo);

export default routerCarrito;