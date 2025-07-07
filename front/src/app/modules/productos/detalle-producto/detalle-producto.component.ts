import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../../../api/services/producto/producto.service';
import { CarritoService } from '../../../api/services/carrito/carrito.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-detalle-producto',
  imports: [CommonModule],
  templateUrl: './detalle-producto.component.html',
  styleUrl: './detalle-producto.component.css'
})
export class DetalleProductoComponent {
  private carritoService = inject(CarritoService);

  id: number = 0;
  producto: any;
  private productoService = inject(ProductoService)

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.id = params['id'];

      this.productoService.obtenerProductoPorId(this.id).subscribe({
          next: (producto) => {
            console.log('Producto recibido:', producto);
            this.producto = producto;
          },
          error: (err) => {
            console.error('Error al obtener producto:', err);
          }
        });
    });
  }

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
