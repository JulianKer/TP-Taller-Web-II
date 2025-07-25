import { Component, OnInit, OnDestroy, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoService } from '../../../api/services/carrito/carrito.service';
import { CarritoHistoricoComponent } from '../carrito-historico/carrito-historico.component';
import { Carrito } from '../../../api/models/carrito.model';
import { CarritoActivoComponent } from "../carrito-activo/carrito-activo.component";

@Component({
  selector: 'app-carrito-contenedor',
  standalone: true,
  imports: [CommonModule, CarritoHistoricoComponent, CarritoActivoComponent],
  templateUrl: './carrito-contenedor.component.html',
  styleUrls: ['./carrito-contenedor.component.css']
})
export class CarritoContenedorComponent implements OnInit, OnDestroy {
  private carritoService = inject(CarritoService);

  carritos = signal<Carrito[]>([]);
  // carritoActivo = signal<Carrito>();
  carritoActivo = signal<Carrito>({
    id: 0,
    usuarioId: 0,
    creadoEn: '',
    estado: '',
    total: 0,
    items: []
  });
  cargando = signal(true);
  mensajeError = '';

  ngOnInit(): void {
    this.obtenerCarritos();
    this.obtenerCarritoActivo();
  }

  ngOnDestroy(): void {
  }

  obtenerCarritos(): void {
    this.carritoService.listCarritosHistorico().subscribe({
      next: (data) => {
        this.carritos.set(data)
        console.log(data)
      },
      error: (err) => {
        console.error('Error al obtener carritos:', err);
        this.mensajeError = 'No hay carritos';
      },
      complete: () => this.cargando.set(false)
    });
  }

  obtenerCarritoActivo(): void {
    this.carritoService.obtenerCarritoActivo().subscribe({
      next: (data) => this.carritoActivo.set(data),
      error: (err) => {
        console.error('Error al obtener carritos:', err);
        this.mensajeError = 'No hay carritos';
      },
      complete: () => this.cargando.set(false)
    });
  }
}
