import { Component,OnInit, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filtros-productos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './filtros-productos.component.html',
  styleUrls: ['./filtros-productos.component.css']
})
export class FiltrosProductosComponent implements OnInit {
  @Input() clasificaciones: string[] = [];

  @Output() filtrosAplicados = new EventEmitter<{
    clasificacion: string;
    precioMin: number | null;
    precioMax: number | null;
  }>();


  ngOnInit(): void {
    const guardado = localStorage.getItem('filtrosProductos');
    if (guardado) {
      const filtros = JSON.parse(guardado);
      this.clasificacionSeleccionada = filtros.clasificacion || '';
      this.precioMin = filtros.precioMin ?? null;
      this.precioMax = filtros.precioMax ?? null;
    }
  }

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
    localStorage.removeItem('filtrosProductos');
    this.aplicarFiltros();
  }
}
