import { Routes } from '@angular/router';
import { GrillaProductosComponent } from './grilla-productos/grilla-productos.component';

export const productosRoutes: Routes = [

    {
        path : '',
        children : [
            {
                path : '',
                component : GrillaProductosComponent,
            }
        ]
    }
    
];