import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NecesitaLoguearse implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean | UrlTree {
    const user = localStorage.getItem('usuarioLogueado');
    if (user) return true;
    return this.router.parseUrl('/auth');
  }
}
