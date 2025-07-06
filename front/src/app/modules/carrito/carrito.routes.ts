import { Routes } from '@angular/router';
import { CarritoActivoComponent } from './carrito-activo/carrito-activo.component';
import { CarritoContenedorComponent } from './carrito-contenedor/carrito-contenedor.component';
import { CarritoDetalleComponent } from './carrito-detalle/carrito-detalle.component';
import { CarritoHistoricoComponent } from './carrito-historico/carrito-historico.component';

export const carritoRoutes: Routes = [

    {
        path : '',
        children : [
            {
                path : '',
                component : CarritoContenedorComponent,
            },
            {
                path : 'carrito/:id',
                component : CarritoDetalleComponent,
            }
        ]
    }
    
];