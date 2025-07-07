import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { CarritoService } from '../../../api/services/carrito/carrito.service'

@Component({
  selector: 'app-card-producto',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './card-producto.component.html',
  styleUrl: './card-producto.component.css'
})

export class CardProductoComponent {
  @Input() nombreImagen: string = '';
  @Input() descripcion: string = '';
  @Input() clasificacion: string = '';
  @Input() precio: number = 0; 
  @Input() id: number = 0; 

  private carritoService = inject(CarritoService);


   mensajeExito: string = '';

  agregarAlCarritoActivo(idProductoAAgregar: number): void {
    this.carritoService.agregarAlCarrito(idProductoAAgregar).subscribe({
      next: (carritoActualizado) => {
        console.log('Producto agregado al carrito:', carritoActualizado);
        this.mensajeExito = 'Producto agregado al carrito correctamente';

        // Ocultar el mensaje después de unos segundos
        setTimeout(() => this.mensajeExito = '', 3000);
      },
      error: (err) => {
        console.error('Error al agregar producto al carrito:', err);
        this.mensajeExito = 'Hubo un error al agregar el producto';
        setTimeout(() => this.mensajeExito = '', 3000);
      }
    });
  }
}








