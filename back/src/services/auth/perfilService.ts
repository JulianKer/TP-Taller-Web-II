import { prisma } from "../../prismaClient";

export async function obtenerUsuarioPorId(usuarioId: number) {
    const usuario = await prisma.usuario.findUnique({
        where: { id: usuarioId },
        select: {
            id: true,
            email: true,
            nombre: true,
            apellido: true,
            direccion: true
        }
    });

    if (!usuario) {
        throw new Error("Usuario no encontrado");
    }

    return usuario;

}