import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private baseUrl = 'http://localhost:3000/api/auth';
  private http = inject(HttpClient);

  constructor() { }

  agregarAlCarrito(idProducto: number): void{
    
  }
}
