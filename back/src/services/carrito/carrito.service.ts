import { prisma } from '../../prismaClient';

export async function obtenerCarritosHistorico(usuarioId: number) {
  const carritos = await prisma.carrito.findMany({
    where: {
      usuarioId: usuarioId,
      estado: { not: 'activo' }
    },
    include: {
      items: {
        include: {
          producto: true
        }
      }
    },
    orderBy: {
      creadoEn: 'desc'
    }
  });

  if (!carritos || carritos.length === 0) {
    throw new Error('No hay carritos para este usuario');
  }

  return JSON.parse(JSON.stringify(carritos));
}

