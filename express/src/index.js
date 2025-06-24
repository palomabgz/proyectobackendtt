import express from 'express';
import userRoutes from './routes/users.routes.js';

const PORT  = 5000;
const app = express();

//middlewares
app.use(express.json());

//routes
app.use('/api/users', userRoutes);

//server
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
}); 