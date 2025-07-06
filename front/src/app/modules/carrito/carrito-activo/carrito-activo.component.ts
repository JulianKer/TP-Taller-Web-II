import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { CarritoItemActivoComponent } from '../carrito-item-activo/carrito-item-activo.component'; // ajustá ruta según tu proyecto

interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  clasificacion: string;
  precio: number;
}

interface CarritoItem {
  id: number;
  producto: Producto;
  cantidad: number;
  precioUnitario: number;
}

interface Carrito {
  id: number;
  usuarioId: number;
  creadoEn: Date;
  estado: string;
  total: number;
  items: CarritoItem[];
}

@Component({
  selector: 'app-carrito-activo',
  standalone: true,
  imports: [CommonModule, CarritoItemActivoComponent],
  templateUrl: './carrito-activo.component.html',
  styleUrls: ['./carrito-activo.component.css']
})


export class CarritoActivoComponent {
  carrito = signal<Carrito>({
    id: 1,
    usuarioId: 123,
    creadoEn: new Date(),
    estado: 'activo',
    total: 0,
    items: [
      {
        id: 1,
        producto: {
          id: 1,
          nombre: 'auto_ferrari.avif',
          descripcion: 'Descripción A',
          clasificacion: 'Clasificación A',
          precio: 100
        },
        cantidad: 2,
        precioUnitario: 0
      },
      {
        id: 2,
        producto: {
          id: 2,
          nombre: 'auto_haas.webp',
          descripcion: 'Descripción B',
          clasificacion: 'Clasificación B',
          precio: 200
        },
        cantidad: 1,
        precioUnitario: 200
      }
    ]
  });

  constructor() {
    this.actualizarTotal();
  }

  aumentarCantidad(index: number) {
    const carritoActual = this.carrito();
    carritoActual.items[index].cantidad++;
    this.carrito.set(carritoActual);
    this.actualizarTotal();
  }

  disminuirCantidad(index: number) {
    const carritoActual = this.carrito();
    if (carritoActual.items[index].cantidad > 1) {
      carritoActual.items[index].cantidad--;
      this.carrito.set(carritoActual);
      this.actualizarTotal();
    }
  }

  eliminarItem(index: number) {
    const carritoActual = this.carrito();
    carritoActual.items.splice(index, 1);
    this.carrito.set(carritoActual);
    this.actualizarTotal();
  }

  actualizarTotal() {
    const carritoActual = this.carrito();
    const total = carritoActual.items.reduce(
      (acc, item) => acc + item.cantidad * item.producto.precio,
      0
    );
    carritoActual.total = total;
    this.carrito.set(carritoActual);
  }
}

