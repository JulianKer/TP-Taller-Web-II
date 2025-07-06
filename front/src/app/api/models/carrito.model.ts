// export interface Carrito {
//    id: number                
//    total: number          
//    creadoEn: string     
//    cantidadDeItems: number   
// }

import { Usuario } from './usuario.model'
import { CarritoItem } from './carrito-item.model'

export interface Carrito {
  id: number;
  usuarioId: number;
  creadoEn: string;      // DateTime en Prisma, en JS/TS como string ISO
  estado: string;        // "activo", "comprado", etc.
  total: number;
  usuario?: Usuario;     // Relación opcional
  items: CarritoItem[];
}