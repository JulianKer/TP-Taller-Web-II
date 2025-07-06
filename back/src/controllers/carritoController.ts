import { Request, Response } from "express";
import { obtenerCarritosHistorico, obtenerCarritoActivo } from "../services/carrito/carrito.service";

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

