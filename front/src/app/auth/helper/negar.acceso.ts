import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NoNecesitaLoguearse implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean | UrlTree {
    const user = localStorage.getItem('usuarioLogueado');
    if (user) return this.router.parseUrl('/inicio');
    return true;
  }
}
