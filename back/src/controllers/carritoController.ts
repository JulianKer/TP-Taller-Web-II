import { Request, Response } from "express";
import { obtenerCarritosHistorico } from "../services/carrito/carrito.service";

export async function getCarritosHistorico(req: Request, res: Response) {
    
    const id = Number((req.params as any).id);

    try {
        const carritosHistoricos = await obtenerCarritosHistorico(id);
        res.json(carritosHistoricos);
    } catch (error:any) {
         res.status(404).json({ error: error.message});
    }
}

