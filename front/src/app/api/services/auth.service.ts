import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private baseUrl = 'http://localhost:3000/api/auth';
  private http = inject(HttpClient);

  signup(usuario: Usuario): Observable<any> {
    return this.http.post(`${this.baseUrl}/signup`, usuario);
  }

  signin(usuario: Usuario): Observable<any> {
    return this.http.post(`${this.baseUrl}/signin`, usuario);
  }
}
