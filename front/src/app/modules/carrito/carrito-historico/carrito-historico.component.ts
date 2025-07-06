import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-carrito-historico',
  imports: [CommonModule, RouterLink],
  templateUrl: './carrito-historico.component.html',
  styleUrl: './carrito-historico.component.css'
})
export class CarritoHistoricoComponent {
  @Input() numeroCarrito: number = 0;
  @Input() fecha: string = "";
  @Input() total: number = 0;
  @Input() cantidadDeItems: number = 0;
}
