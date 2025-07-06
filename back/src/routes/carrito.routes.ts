import express from 'express';
import { getCarritosHistorico, getCarritoActivo, getDetalleCarrito } from '../controllers/carritoController';

const routerCarrito = express.Router();

routerCarrito.get('/obtenerCarritosHistorico/:id', getCarritosHistorico);
routerCarrito.get('/obtenerCarritoActivo/:id', getCarritoActivo);
routerCarrito.get('/obtenerDetallePedido/:userId/:carritoId', getDetalleCarrito);

export default routerCarrito;