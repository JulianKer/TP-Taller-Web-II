import { Router } from 'express';
import { obtenerProductos, obtenerProductoPorId } from '../controllers/productosController';

const routerProductos = Router();

routerProductos.get('/obtenerproductos', obtenerProductos);
routerProductos.get('/obtenerProductoPorId/:id', obtenerProductoPorId);

export default routerProductos;