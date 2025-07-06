import { Router } from 'express';
import { obtenerProductos } from '../controllers/productosController';

const routerProductos = Router();

routerProductos.get('/obtenerproductos', obtenerProductos);

export default routerProductos;