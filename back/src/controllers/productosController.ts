import { Request, Response } from 'express';
import { getProductos, getProductoById } from './../services/productos/productos.service';

export async function obtenerProductos(req: Request, res: Response) {
  try {
    const productos = await getProductos();
    res.status(201).json(productos);
  } catch (e: any) {
    res.status(400).json({ error: e.message });
  }
}

export async function obtenerProductoPorId(req: Request, res: Response){
  const id = parseInt(req.params.id, 10);
  console.log("llego al controller")
  try {
    const producto = await getProductoById(id);
     console.log("pord" + producto?.id)
    res.status(201).json(producto);
  } catch (e: any) {
    res.status(400).json({ error: e.message });
  }
};