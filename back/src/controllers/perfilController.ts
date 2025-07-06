import { Request, Response } from "express";
import { obtenerUsuarioPorId } from "../services/auth/perfilService";

export async function getPerfil(req: Request, res: Response) {
    try {
        const id = Number(req.params.id);
        const usuario = await obtenerUsuarioPorId(id);
        res.json(usuario);
    } catch (error:any) {
         res.status(404).json({ error: error.message});
    }
}