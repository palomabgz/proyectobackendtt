import express from 'express';
import cors from 'cors';
import productRoutes from './routes/product.routes.js';

const PORT  = 5000;
const app = express();

const corsOptions = {
    origin: 'http://127.0.0.1:5501',
    methods: ['GET','HEAD','PUT','POST','DELETE'],
};

//middlewares
app.use(express.json());
app.use(cors());

//routes
app.use('/api/products', productRoutes);

//server
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});