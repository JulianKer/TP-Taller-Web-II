import { Request, Response } from "express";
import { obtenerCarritosHistorico, 
    obtenerCarritoActivo, 
    obtenerDetalleCarrito, 
    agregarProductoAlCarrito, 
    aumentarCantidadProductoDelCarrito,
    disminuirCantidadProductoDelCarrito,
    eliminarItem } from "../services/carrito/carrito.service";

export async function getCarritosHistorico(req: Request, res: Response) {
    
    const id = Number((req.params as any).id);

    try {
        const carritosHistoricos = await obtenerCarritosHistorico(id);
        res.json(carritosHistoricos);
    } catch (error:any) {
        res.status(404).json({ error: error.message});
    }
}

export async function getCarritoActivo(req: Request, res: Response) {
    
    const id = Number((req.params as any).id);

    try {
        const carritoActivo = await obtenerCarritoActivo(id);
        res.json(carritoActivo);
    } catch (error:any) {
        res.status(404).json({ error: error.message});
    }
}

export async function getDetalleCarrito(req: Request, res: Response) {
    
    const userId = Number((req.params as any).userId);
    const carritoId = Number((req.params as any).carritoId);

    try {
        const detalleCarrito = await obtenerDetalleCarrito(userId, carritoId);
        res.json(detalleCarrito);
    } catch (error:any) {
        res.status(404).json({ error: error.message});
    }
}


export async function agregarAlCarrito(req: Request, res: Response) {
  const userId = parseInt(req.params.userId);
  const idProducto = parseInt(req.params.idProducto);

  try {
    const carritoActualizado = await agregarProductoAlCarrito(userId, idProducto);
    res.json(carritoActualizado);
  } catch (error: any) {
    res.status(404).json({ error: error.message});
  }
}

export async function aumentarCantidadProducto(req: Request, res: Response) {
  const carritoActualId = parseInt(req.params.carritoActualId);
  const productoId = parseInt(req.params.productoId);

  try {
    const carritoActualizado = await aumentarCantidadProductoDelCarrito(carritoActualId, productoId);
    res.json(carritoActualizado);
  } catch (error: any) {
    res.status(404).json({ error: error.message});
  }
}

export async function disminuirCantidadProducto(req: Request, res: Response) {
  const carritoActualId = parseInt(req.params.carritoActualId);
  const productoId = parseInt(req.params.productoId);

  try {
    const carritoActualizado = await disminuirCantidadProductoDelCarrito(carritoActualId, productoId);
    res.json(carritoActualizado);
  } catch (error: any) {
    res.status(404).json({ error: error.message});
  }
}

export async function eliminarItemDelCarrito(req: Request, res: Response) {
  const carritoActualId = parseInt(req.params.carritoActualId);
  const itemId = parseInt(req.params.itemId);

  try {
    const carritoActualizado = await eliminarItem(carritoActualId, itemId);
    res.json(carritoActualizado);
  } catch (error: any) {
    res.status(404).json({ error: error.message});
  }
}

