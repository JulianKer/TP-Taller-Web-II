import { prisma } from '../../prismaClient';
import { Usuario } from '@prisma/client';

export async function getProductos() {
  const productos = await prisma.producto.findMany();

   if (!productos || productos.length === 0) {
    throw new Error('No hay productos');
  }
  return JSON.parse(JSON.stringify(productos));
}