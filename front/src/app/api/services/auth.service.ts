import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario.model';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private baseUrl = 'http://localhost:3000/api/auth';
  private http = inject(HttpClient);

  private logueadoSubject = new BehaviorSubject<boolean>(
    localStorage.getItem('usuarioLogueado') === 'si'
  );

  public estaLogueado$ = this.logueadoSubject.asObservable();

  signup(usuario: Usuario): Observable<any> {
    return this.http.post(`${this.baseUrl}/signup`, usuario);
  }


  // ----------- esto para el login------------------------------------
  setearLocalStorageConInfoDelUser(user: any): void{

    localStorage.setItem('usuarioLogueado', 'si')
    localStorage.setItem('usuarioNombre', user.nombre)
    localStorage.setItem('usuarioEmail', user.email)
    localStorage.setItem('usuarioId', user.id)

    this.logueadoSubject.next(true);
  }

  obtenerEstadoDeLogueoActual(): boolean {
    return this.logueadoSubject.getValue();
  }

  signin(usuario: Usuario): Observable<any> {
    return this.http.post(`${this.baseUrl}/signin`, usuario);
  }
  // ----------------- fin del login -----------------------------

  cerrarSesion(): void{
    localStorage.clear();
    this.logueadoSubject.next(false); // con este, emito que se cerro la sesion así no muestro ni el footer ni el mEnú
  }
}
