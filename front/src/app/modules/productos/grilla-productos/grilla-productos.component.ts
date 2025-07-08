import { Component, OnInit, OnDestroy, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoService } from '../../../api/services/producto/producto.service';
import { Producto } from '../../../api/models/producto.model';
import { CardProductoComponent } from '../card-producto/card-producto.component';
import { FiltrosProductosComponent } from '../filtros-productos/filtros-productos.component';

@Component({
  selector: 'app-grilla-productos',
  standalone: true,
  imports: [CommonModule, CardProductoComponent, FiltrosProductosComponent],
  templateUrl: './grilla-productos.component.html',
  styleUrls: ['./grilla-productos.component.css']
})
export class GrillaProductosComponent implements OnInit, OnDestroy {

  private productoService = inject(ProductoService);

  productos = signal<Producto[]>([]); //y este lo dejo como para tener el total que es a los q le aplico los filtros, onda, me guardo toodos acá pero muestro el signal filtrado de abajo
  productosFiltrados = signal<Producto[]>([]); //me cree otro para que los filtros los haga en el front, osea no le voy a pedir a la bdd que me de los productos filtrados sino que los voy a filtrar acá adentro en el fortn
  cargando = signal(true);
  mensajeError = "";

  ngOnInit(): void {
    this.obtenerProductos();
  }

  ngOnDestroy(): void {}

  obtenerProductos(): void {
    this.productoService.listProductos().subscribe({
      next: (data) => {
        this.productos.set(data);
        this.productosFiltrados.set(data);
        
        const filtrosGuardados = localStorage.getItem('filtrosProductos');
        if (filtrosGuardados) {
          const filtros = JSON.parse(filtrosGuardados); //lo parseo a json pq puse q el aplicar fitlros recibe un json con 3 propiedades como el momo jaja
          this.aplicarFiltros(filtros);
        } else {
          this.productosFiltrados.set(data);
        }

      },
      error: (err) => {
        console.error('Error al obtener productos:', err);
        this.mensajeError = "No hay productos";
      },
      complete: () => this.cargando.set(false)
    });
  }

  aplicarFiltros(filtros: {
    clasificacion: string;
    precioMin: number | null;
    precioMax: number | null;
  }) {
    const todos = this.productos();

    const filtrados = todos.filter(producto => {
      const coincideClasificacion = !filtros.clasificacion || producto.clasificacion === filtros.clasificacion;
      const coincidePrecioMin = filtros.precioMin == null || producto.precio >= filtros.precioMin;
      const coincidePrecioMax = filtros.precioMax == null || producto.precio <= filtros.precioMax;
      return coincideClasificacion && coincidePrecioMin && coincidePrecioMax;
    });

    localStorage.setItem('filtrosProductos', JSON.stringify(filtros));
    this.productosFiltrados.set(filtrados);
  }

  get clasificacionesDisponibles(): string[] {
    return [...new Set(this.productos().map(p => p.clasificacion))];
  }
}
