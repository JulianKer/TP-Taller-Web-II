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



export async function obtenerCarritoActivo(usuarioId: number) {
  const carritoActivo = await prisma.carrito.findFirst({
    where: {
      usuarioId: usuarioId,
      estado: 'activo'
    },
    include: {
      items: {
        include: {
          producto: true
        }
      }
    }
  });

  if (!carritoActivo) {
    throw new Error('No hay carritos activos para este usuario');
  }

  return JSON.parse(JSON.stringify(carritoActivo));
}


export async function obtenerDetalleCarrito(userId: number, carritoId: number){

  const detalleCarrito = await prisma.carrito.findFirst({
    where: {
      usuarioId: userId,
      id : carritoId,
      estado: { not: 'activo' }
    },
    include: {
      items: {
        include: {
          producto: true
        }
      }
    }
  });

  if (!detalleCarrito) {
    throw new Error('No hay carritos activos para este usuario');
  }

  return JSON.parse(JSON.stringify(detalleCarrito));
}


export async function aumentarCantidadProductoDelCarrito(carritoId: number, productoId: number) {
  // para aumentar la cantidad, yo ya se el carrito y el producto, entocnes busco el carrito item directamente con
  // ese producto y le subo 1 a cantidad :) y devuelvo ese carrito actualizao
  const carritoItem = await prisma.carritoItem.findFirst({
    where: {
      carritoId: carritoId,
      productoId: productoId,
    }
  });

  if (!carritoItem) {
    throw new Error('El producto no está en el carrito');
  }

  const actualizado = await prisma.carritoItem.update({
    where: { id: carritoItem.id },
    data: { cantidad: carritoItem.cantidad + 1 }
  });

  const carritoActualizado = await prisma.carrito.findUnique({
    where: { id: carritoId },
    include: {
      items: {
        include: { producto: true }
      }
    }
  });

  if (!carritoActualizado) {
    throw new Error('Carrito no encontrado');
  }

  return JSON.parse(JSON.stringify(carritoActualizado));
}



export async function disminuirCantidadProductoDelCarrito(carritoId: number, productoId: number) {
  // para DISMINUIR la cantidad, yo ya se el carrito y el producto, entocnes busco el carrito item directamente con
  // ese producto y le bajo 1 a cantidad :) y devuelvo ese carrito actualizao
  const carritoItem = await prisma.carritoItem.findFirst({
    where: {
      carritoId: carritoId,
      productoId: productoId,
    }
  });

  if (!carritoItem) {
    throw new Error('El producto no está en el carrito');
  }

  const actualizado = await prisma.carritoItem.update({
    where: { id: carritoItem.id },
    data: { cantidad: carritoItem.cantidad - 1 }
  });

  const carritoActualizado = await prisma.carrito.findUnique({
    where: { id: carritoId },
    include: {
      items: {
        include: { producto: true }
      }
    }
  });

  if (!carritoActualizado) {
    throw new Error('Carrito no encontrado');
  }

  return JSON.parse(JSON.stringify(carritoActualizado));
}


export async function eliminarItem(carritoId: number, itemId: number) {
  const carritoItem = await prisma.carritoItem.findFirst({
    where: {
      carritoId: carritoId,
      id: itemId,
    }
  });

  if (!carritoItem) {
    throw new Error('El producto no está en el carrito');
  }

  const eliminado = await prisma.carritoItem.delete({
    where: { id: itemId }
  });

  const carritoActualizado = await prisma.carrito.findUnique({
    where: { id: carritoId },
    include: {
      items: {
        include: { producto: true }
      }
    }
  });

  if (!carritoActualizado) {
    throw new Error('Carrito no encontrado');
  }

  return JSON.parse(JSON.stringify(carritoActualizado));
}


export async function finalizarCompraYCrearNuevoCarrito(idCarritoActual: number) {
  //para terminar la compra, le cambio el estado del carrito actual a "comprado" o algo q sea distinto de "activo"
  // y además, el precio del producto lo pongo a nivel de carrito-item para mantener el "historico"
  // de cuanto salió el producto al momento de la compra por mas q el prod actual tenga oootro precio
  const carritoActivo = await prisma.carrito.findFirst({
    where: {
      id: idCarritoActual,
      estado: 'activo'
    },
    include: {
      items: {
        include: {
          producto: true
        }
      }
    }
  });

  if (!carritoActivo) {
    throw new Error('No se encontró un carrito activo con ese ID.');
  }

  for (const item of carritoActivo.items) {
    await prisma.carritoItem.update({
      where: { id: item.id },
      data: {
        precioUnitario: item.producto.precio
      }
    });
  }

  await prisma.carrito.update({
    where: { id: idCarritoActual },
    data: {
      estado: 'comprado',
      creadoEn: new Date(),
    }
  });

  const nuevoCarrito = await prisma.carrito.create({
    data: {
      usuarioId: carritoActivo.usuarioId,
      estado: 'activo',
      total: 0,
      creadoEn: new Date()
    },
    include: {
      items: {
        include: {
          producto: true
        }
      }
    }
  });

  return JSON.parse(JSON.stringify(nuevoCarrito));
}



export async function agregarProductoAlCarrito(userId: number, idProducto: number) {
  // hay hciismos esta lógic apara que si el user quiere agregar un producto que YA ESTA en el carrito, que no lo pise sino que
  //incremente la cantidad de ESE producto en 1, ahora, si el que intenta agregar, NO ESTÁ, cra ese obj junction de carrito item
  // que apunta a un prod y a este carrito y le pone cantidad 1 je
  const carritoActivo = await prisma.carrito.findFirst({
    where: {
      usuarioId: userId,
      estado: 'activo'
    },
    include: {
      items: true
    }
  });

  if (!carritoActivo) {
    throw new Error('El usuario no tiene un carrito activo.');
  }

  const itemExistente = await prisma.carritoItem.findFirst({
    where: {
      carritoId: carritoActivo.id,
      productoId: idProducto
    }
  });

  if (itemExistente) {
    await prisma.carritoItem.update({
      where: { id: itemExistente.id },
      data: {
        cantidad: { increment: 1 }
      }
    });
  } else {
    const producto = await prisma.producto.findUnique({
      where: { id: idProducto }
    });

    if (!producto) {
      throw new Error('Producto no encontrado');
    }

    await prisma.carritoItem.create({
      data: {
        carritoId: carritoActivo.id,
        productoId: idProducto,
        cantidad: 1,
        precioUnitario: producto.precio
      }
    });
  }

  const carritoActualizado = await prisma.carrito.findUnique({
    where: { id: carritoActivo.id },
    include: {
      items: {
        include: {
          producto: true
        }
      }
    }
  });

  return JSON.parse(JSON.stringify(carritoActualizado));
}



