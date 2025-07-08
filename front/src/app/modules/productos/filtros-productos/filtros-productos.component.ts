import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filtros-productos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './filtros-productos.component.html',
  styleUrls: ['./filtros-productos.component.css']
})
export class FiltrosProductosComponent {
  @Input() clasificaciones: string[] = [];

  @Output() filtrosAplicados = new EventEmitter<{
    clasificacion: string;
    precioMin: number | null;
    precioMax: number | null;
  }>();

  clasificacionSeleccionada: string = '';
  precioMin: number | null = null;
  precioMax: number | null = null;

  aplicarFiltros() {
    this.filtrosAplicados.emit({
      clasificacion: this.clasificacionSeleccionada,
      precioMin: this.precioMin,
      precioMax: this.precioMax
    });
  }

  limpiarFiltros() {
    this.clasificacionSeleccionada = '';
    this.precioMin = null;
    this.precioMax = null;
    this.aplicarFiltros();
  }
}
