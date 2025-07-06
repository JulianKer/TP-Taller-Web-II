import { inject, Injectable, numberAttribute } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, delay } from 'rxjs';
import { Carrito } from '../../models/carrito.model';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private baseUrl = 'http://localhost:3000/api/carrito';
  private http = inject(HttpClient);

  constructor() { }

  agregarAlCarrito(idProducto: number): void{
    
  }

  listCarritosHistorico(): Observable<Carrito[]>{
      return this.http.get<Carrito[]>(`${this.baseUrl}/obtenerCarritosHistorico`);
  }

  obtenerCarritoActivo(): Observable<any>{
    return this.http.get<Carrito[]>(`${this.baseUrl}/obtenerCarritoActivo`);
  }
  
  obtenerCarritoActivoTEST(): Observable<any>{
    const carritosDePrueba = [
      { id: 1, fecha: '2025-07-01', total: 3500, cantidadDeItems: 4 },
    ]
    return of(carritosDePrueba);
  }

   listCarritosHistoricoTEST() {
    const carritosDePrueba = [
      { id: 1, fecha: '2025-07-01', total: 3500, cantidadDeItems: 4 },
      { id: 2, fecha: '2025-06-25', total: 1870, cantidadDeItems: 2 },
      { id: 3, fecha: '2025-06-20', total: 4200, cantidadDeItems: 6 },
      { id: 4, fecha: '2025-06-10', total: 999, cantidadDeItems: 1 }
    ];

    return of(carritosDePrueba);
  }
}
