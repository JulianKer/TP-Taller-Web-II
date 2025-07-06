import { Component, OnInit, OnDestroy, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoService } from '../../../api/services/producto/producto.service';
import { Producto } from '../../../api/models/producto.model';
import { CardProductoComponent } from '../card-producto/card-producto.component';
import { defaultEquals } from '@angular/core/primitives/signals';

@Component({
  selector: 'app-grilla-productos',
  standalone: true,
  imports: [CommonModule, CardProductoComponent],
  templateUrl: './grilla-productos.component.html',
  styleUrls: ['./grilla-productos.component.css']
})

export class GrillaProductosComponent implements OnInit, OnDestroy {

  private productoService = inject(ProductoService);

  productos = signal<Producto[]>([]);
  cargando = signal(true);
  mensajeError = "";

  ngOnInit(): void {
    this.obtenerProductos();
  }

  ngOnDestroy(): void {}

  obtenerProductos(): void {
    this.productoService.listProductos().subscribe({
      next: (data) => this.productos.set(data),
      error: (err) => {
        console.error('Error al obtener productos:', err);
        this.mensajeError = "No hay productos";
      },
      complete: () => this.cargando.set(false)
    });
  }
}
