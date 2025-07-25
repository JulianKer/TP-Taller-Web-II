import express from 'express';
import { getCarritosHistorico, getCarritoActivo, getDetalleCarrito, agregarAlCarrito, aumentarCantidadProducto, disminuirCantidadProducto, eliminarItemDelCarrito, terminarCompra } from '../controllers/carritoController';

const routerCarrito = express.Router();

routerCarrito.get('/obtenerCarritosHistorico/:id', getCarritosHistorico);
routerCarrito.get('/obtenerCarritoActivo/:id', getCarritoActivo);
routerCarrito.get('/obtenerDetallePedido/:userId/:carritoId', getDetalleCarrito);
routerCarrito.get('/agregarAlCarrito/:userId/:idProducto', agregarAlCarrito);
routerCarrito.get('/aumentarCantidadProducto/:carritoActualId/:productoId', aumentarCantidadProducto);
routerCarrito.get('/disminuirCantidadProducto/:carritoActualId/:productoId', disminuirCantidadProducto);
routerCarrito.get('/eliminarItem/:carritoActualId/:itemId', eliminarItemDelCarrito);
routerCarrito.get('/terminarCompra/:idCarritoActual', terminarCompra);

export default routerCarrito;