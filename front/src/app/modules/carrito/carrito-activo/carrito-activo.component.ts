import { CommonModule } from '@angular/common';
import { Component, signal, inject, Input } from '@angular/core';
import { CarritoItemActivoComponent } from '../carrito-item-activo/carrito-item-activo.component'; // ajustá ruta según tu proyecto
import { Router, ActivatedRoute } from '@angular/router';
import { Carrito } from '../../../api/models/carrito.model';
import { CarritoService } from '../../../api/services/carrito/carrito.service';

@Component({
  selector: 'app-carrito-activo',
  standalone: true,
  imports: [CommonModule, CarritoItemActivoComponent],
  templateUrl: './carrito-activo.component.html',
  styleUrls: ['./carrito-activo.component.css']
})


export class CarritoActivoComponent {
  @Input() obtenerCarritos!: () => void;
  private carritoService = inject(CarritoService);
  msjExito = signal<string>('');
  msjError = signal<string>('');

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  mostrarAcciones = signal(false);

  carrito = signal<Carrito>({
    id: 0,
    usuarioId: 0,
    creadoEn: '',
    estado: '',
    total: 0,
    items: []
  });

  ngOnInit(): void {
    this.mostrarAcciones.set(this.router.url === '/carrito');

    if (this.mostrarAcciones()) {
      this.cargarCarritoActivo();
    } else {
      this.route.params.subscribe(params => {
        const carritoId = Number(params['id']); 
        if (!isNaN(carritoId)) {
          this.cargarDetallePedido(carritoId);
        } else {
          console.error('ID inválido');
        }
      });
    }
  }

  private cargarCarritoActivo(): void {
    this.carritoService.obtenerCarritoActivo().subscribe({
      next: (carrito) => {
        this.carrito.set(carrito);
        this.actualizarTotal(); 
      },
      error: (error) => {
        console.error('Error al obtener el carrito activo:', error);
      }
    });
  }

  private cargarDetallePedido(carritoId: number): void {
    this.carritoService.obtenerDetallePedido(carritoId).subscribe({
      next: (carrito) => {
        this.carrito.set(carrito);
        this.actualizarTotal(); 
      },
      error: (error) => {
        console.error('Error al obtener el detalle del carrrito:', error);
      }
    });
  }

  aumentarCantidad(index: number) {
    const carritoActual = this.carrito();
    carritoActual.items[index].cantidad++; // acá como me llega el index del carrito-item, ya se a cual aumentarle
    this.carrito.set(carritoActual);
    this.actualizarTotal();

    const item = carritoActual.items[index];
    this.carritoService.aumentarCantidadProducto(carritoActual.id, item.producto.id).subscribe({
      next: () => {
        this.msjExito.set('Cantidad actualizada con éxito!');
        setTimeout(() => this.msjExito.set(''), 3000);
      },
      error: (error) => {
        console.error('Error al actualizar cantidad en el backend:', error);
      }
    });
  }

  disminuirCantidad(index: number) {
    const carritoActual = this.carrito();
    if (carritoActual.items[index].cantidad > 1) {
      carritoActual.items[index].cantidad--;
      this.carrito.set(carritoActual);
      this.actualizarTotal();

      const item = carritoActual.items[index];
      this.carritoService.disminuirCantidad(carritoActual.id, item.producto.id).subscribe({
      next: () => {
        this.msjExito.set('Cantidad actualizada con éxito!');
        setTimeout(() => this.msjExito.set(''), 3000);
      },
      error: (error) => {
        console.error('Error al actualizar cantidad en el backend:', error);
      }
    });
    }
  }

  eliminarItem(index: number) {
    const carritoActual = this.carrito();
    const item = carritoActual.items[index];
    
    carritoActual.items.splice(index, 1);
    this.carrito.set(carritoActual);
    this.actualizarTotal();

    this.carritoService.eliminarItem(carritoActual.id, item.id).subscribe({
      next: () => {
        this.msjExito.set('Producto eliminado con éxito!');
        setTimeout(() => this.msjExito.set(''), 3000);
      },
      error: (error) => {
        console.error('Error al eiminar el producto en el backend:', error);
      }
    });
  }
  
  
  terminarCompra() {
    const carritoActual = this.carrito();
    const idCarritoActual = carritoActual.id;

    if (!carritoActual.items || carritoActual.items.length === 0) {
      this.msjError.set('No podés terminar la compra si el carrito está vacío!');
      setTimeout(() => this.msjError.set(''), 3000);
      return;
    }
    this.carritoService.terminarCompra(idCarritoActual).subscribe({
      next: () => {
        this.cargarCarritoActivo();
        if (this.obtenerCarritos) {
          this.obtenerCarritos(); // aca mando a llamar al metodo de obtener carritos de nuevo asi se actualiza je
        } 
        this.msjExito.set('Compra realizada con éxito!');
        setTimeout(() => this.msjExito.set(''), 3000);
      },
      error: (error) => {
        console.error('Error al eiminar el producto en el backend:', error);
        this.msjError.set('Hubo un error al procesar la compra.');
        setTimeout(() => this.msjError.set(''), 3000);
      }
    });
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

