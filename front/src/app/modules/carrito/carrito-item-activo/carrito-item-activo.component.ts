import { Component, Input, signal, Inject  } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carrito-item-activo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrito-item-activo.component.html',
  styleUrls: ['./carrito-item-activo.component.css']
})
export class CarritoItemActivoComponent {
  @Input() item!: any;
  @Input() index!: number;
  @Input() mostrarAccionesEnHijo!: boolean;
  
  @Input() aumentarCantidad!: (index: number) => void;
  @Input() disminuirCantidad!: (index: number) => void;
  @Input() eliminarItem!: (index: number) => void;

  
  @Input() onObtenerCarritos!: () => void;
}
