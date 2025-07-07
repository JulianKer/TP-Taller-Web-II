import express from 'express';
import { getCarritosHistorico, getCarritoActivo, getDetalleCarrito, agregarAlCarrito, aumentarCantidadProducto } from '../controllers/carritoController';

const routerCarrito = express.Router();

routerCarrito.get('/obtenerCarritosHistorico/:id', getCarritosHistorico);
routerCarrito.get('/obtenerCarritoActivo/:id', getCarritoActivo);
routerCarrito.get('/obtenerDetallePedido/:userId/:carritoId', getDetalleCarrito);
routerCarrito.get('/agregarAlCarrito/:userId/:idProducto', agregarAlCarrito);
routerCarrito.get('/aumentarCantidadProducto/:carritoActualId/:productoId', aumentarCantidadProducto);

export default routerCarrito;