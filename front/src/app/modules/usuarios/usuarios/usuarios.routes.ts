import { Routes } from '@angular/router';
import { UsuariosComponent } from './usuarios.component';

export const usuariosRoutes: Routes = [

    {
        path : '',
        children : [
            {
                path : 'usuarios',
                component : UsuariosComponent
            }
        ]
    }
    
];