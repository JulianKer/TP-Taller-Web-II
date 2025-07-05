import { Request, Response } from 'express';
import { registrarUsuario, loginUsuario } from '../services/auth/authService';

export async function signup(req: Request, res: Response) {
  try {
    const user = await registrarUsuario(req.body);
    res.status(201).json(user);
  } catch (e: any) {
    res.status(400).json({ error: e.message });
  }
}

export async function signin(req: Request, res: Response) {
  try {
    const { email, password } = req.body;
    const user = await loginUsuario(email, password);
    res.json(user);
  } catch (e: any) {
    res.status(401).json({ error: e.message });
  }
}