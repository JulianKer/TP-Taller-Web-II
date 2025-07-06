// export interface Producto {
//    id: number                
//    nombre: string          
//    descripcion: string     
//    clasificacion: string   
//    precio: number
// }
import { CarritoItem } from './carrito-item.model'

export interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  clasificacion: string;
  precio: number;
  itemsEnCarrito?: CarritoItem[];
}