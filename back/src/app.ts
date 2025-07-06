import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.routes';

import perfilRoutes from './routes/perfil.routes';
import routerProductos from './routes/productos.routes';
import routerCarrito from './routes/carrito.routes';


const app = express();

app.use(cors());
app.use(express.json());

// acá hay q agregar el use de los ruters (el profe lo hizo invocando un metodo main pero bueno) ADEMAS cambiar la url base en cada service del back
app.use('/api/auth', authRoutes);
app.use('/api/perfil', perfilRoutes);
app.use('/api/producto', routerProductos);
app.use('/api/carrito', routerCarrito);


app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});