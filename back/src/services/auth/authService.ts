import { prisma } from '../../prismaClient';
import { Usuario } from '@prisma/client';

// interface UsuarioInput {
//   email: string;
//   password: string;
//   nombre: string;
//   apellido: string;
//   direccion: string;
// }

const validarPassword = (pwd: string) => {
  const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;
  return regex.test(pwd);
};

export async function registrarUsuario(data: Usuario) {
  if (!validarPassword(data.password)) {
    throw new Error('La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número');
  }

  const existe = await prisma.usuario.findUnique({ where: { email: data.email } });
  if (existe) throw new Error('El email ya está registrado');

  const nuevoUsuario = await prisma.usuario.create({
    data: { ...data }
  });

  return { id: nuevoUsuario.id, email: nuevoUsuario.email };
}

export async function loginUsuario(email: string, password: string) {
  const user = await prisma.usuario.findUnique({ where: { email } });
  if (!user) throw new Error('Credenciales inválidas');

  if (user.password !== password) {
    throw new Error('Credenciales inválidas');
  }

  return { id: user.id, email: user.email, nombre: user.nombre };
}
