import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.routes';
import perfilRoutes from './routes/perfil.routes';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/perfil', perfilRoutes);

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});