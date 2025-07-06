import { Carrito } from './carrito.model'
import { Producto } from './producto.model'


export interface CarritoItem {
  id: number;
  carritoId: number;
  productoId: number;
  cantidad: number;
  precioUnitario: number;
  carrito?: Carrito;    // Relación opcional
  producto: Producto;
}