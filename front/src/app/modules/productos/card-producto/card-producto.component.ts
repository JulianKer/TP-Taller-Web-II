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


  agregarAlCarritoActivo(idProductoAAgregar: number){
    // console.log("producto " + idProductoAAgregar + " agregado.")
    this.carritoService.agregarAlCarrito(idProductoAAgregar);
  }
}








