import { Routes } from '@angular/router';
import { CarritoActivoComponent } from './carrito-activo/carrito-activo.component';
import { CarritoContenedorComponent } from './carrito-contenedor/carrito-contenedor.component';

export const carritoRoutes: Routes = [

    {
        path : '',
        children : [
            {
                path : '',
                component : CarritoContenedorComponent,
            },
            {
                path : 'detalle/:id',
                component : CarritoActivoComponent,
            }
        ]
    }
    
];