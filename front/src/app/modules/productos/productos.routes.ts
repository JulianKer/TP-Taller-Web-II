import { Routes } from '@angular/router';
import { GrillaProductosComponent } from './grilla-productos/grilla-productos.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';

export const productosRoutes: Routes = [

    {
        path : '',
        children : [
            {
                path : '',
                component : GrillaProductosComponent,
            },
            {
                path : 'detalle/:id',
                component : DetalleProductoComponent,
            }
        ]
    }
    
];