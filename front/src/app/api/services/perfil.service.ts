import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PerfilService {
  private http = inject(HttpClient);
  private baseUrl = 'http://localhost:3000/api/perfil';

  obtenerPerfil(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}