import { Request, Response } from 'express';
import { getProductos } from './../services/productos/productos.service';

export async function obtenerProductos(req: Request, res: Response) {
  try {
    const productos = await getProductos();
    res.status(201).json(productos);
  } catch (e: any) {
    res.status(400).json({ error: e.message });
  }
}