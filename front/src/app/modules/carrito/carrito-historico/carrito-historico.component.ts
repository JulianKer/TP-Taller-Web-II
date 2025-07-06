import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carrito-historico',
  imports: [CommonModule],
  templateUrl: './carrito-historico.component.html',
  styleUrl: './carrito-historico.component.css'
})
export class CarritoHistoricoComponent {
  @Input() numeroCarrito: number = 0;
  @Input() fecha: string = "";
  @Input() total: number = 0;
  @Input() cantidadDeItems: number = 0;


  verDetalle(id: number): void{

  }
}
