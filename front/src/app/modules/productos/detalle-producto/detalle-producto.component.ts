import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../../../api/services/producto/producto.service';

@Component({
  standalone: true,
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrl: './detalle-producto.component.css'
})
export class DetalleProductoComponent {
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

  agregarAlCarritoActivo(id: number){

  }
}
