import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Producto } from '../../models/producto.model';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private baseUrl = 'http://localhost:3000/api/producto';
  private http = inject(HttpClient);


  listProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.baseUrl}/obtenerproductos`);
  }

  obtenerProductoPorId(id: number): Observable<Producto>{
    console.log("sigo en")
    return this.http.get<Producto>(`${this.baseUrl}/obtenerProductoPorId/${id}`);
  }
}
