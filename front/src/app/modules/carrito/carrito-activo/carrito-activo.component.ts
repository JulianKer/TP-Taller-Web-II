import { CommonModule } from '@angular/common';
import { Component, signal, inject } from '@angular/core';
import { CarritoItemActivoComponent } from '../carrito-item-activo/carrito-item-activo.component'; // ajustá ruta según tu proyecto
import { Router } from '@angular/router';
import { Carrito } from '../../../api/models/carrito.model';

@Component({
  selector: 'app-carrito-activo',
  standalone: true,
  imports: [CommonModule, CarritoItemActivoComponent],
  templateUrl: './carrito-activo.component.html',
  styleUrls: ['./carrito-activo.component.css']
})


export class CarritoActivoComponent {
  private router = inject(Router);
  mostrarAcciones = signal(false);

carrito = signal<Carrito>({
  id: 1,
  usuarioId: 123,
  creadoEn: new Date().toISOString(),  // string, no Date
  estado: 'activo',
  total: 0,
  items: [
    {
      id: 1,
      carritoId: 1,
      productoId: 1,
      cantidad: 2,
      precioUnitario: 100,
      producto: {
        id: 1,
        nombre: 'auto_ferrari.avif',
        descripcion: 'Descripción A',
        clasificacion: 'Clasificación A',
        precio: 100
      }
    }
  ]
});


  constructor() {
    this.actualizarTotal();
    this.mostrarAcciones.set(this.router.url === '/carrito');
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

