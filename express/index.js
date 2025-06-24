import express from 'express';

const PORT  = 5000;
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/nosotros', (req, res) => {
    res.send('Nosotros');
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});