import { Routes } from '@angular/router';
import { HomeComponent } from '../app/public/home/home.component';
import { AuthComponent } from '../app/auth/auth/auth.component';

import { NecesitaLoguearse } from './auth/helper/permitir.acceso';
import { NoNecesitaLoguearse } from './auth/helper/negar.acceso';

export const routes: Routes = [

     {
        path : 'inicio',
        component : HomeComponent,
        canActivate: [NecesitaLoguearse]
    },
     {
        path : 'auth',
        component : AuthComponent,
        canActivate: [NoNecesitaLoguearse]
    },
    {
        path : 'usuarios',
        loadChildren : ()=>import('./modules/usuarios/usuarios/usuarios.routes').then(e => e.usuariosRoutes)
    },
    {
        path: 'perfil',
        loadChildren:()=> import('./modules/usuarios/perfil/perfil.routes').then(m => m.perfilRoutes)  
          
    },
    {
        path : 'productos',
        loadChildren : ()=>import('./modules/productos/productos.routes').then(e => e.productosRoutes),
        canActivate: [NecesitaLoguearse]
    },
    {
        path : 'carrito',
        loadChildren : ()=>import('./modules/carrito/carrito.routes').then(e => e.carritoRoutes),
        canActivate: [NecesitaLoguearse]
    },
    {
        path : '**',
        redirectTo : 'inicio'
    },
    
];
