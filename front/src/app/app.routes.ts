import { Routes } from '@angular/router';
import { HomeComponent } from '../app/public/home/home.component';
import { AuthComponent } from '../app/auth/auth/auth.component';

export const routes: Routes = [

     {
        path : '',
        component : HomeComponent
    },
     {
        path : 'auth',
        component : AuthComponent
    },
    {
        path : 'usuarios',
        loadChildren : ()=>import('./modules/usuarios/usuarios/usuarios.routes').then(e => e.usuariosRoutes)
    },
    {
        path : '**',
        redirectTo : ''
    },
];
