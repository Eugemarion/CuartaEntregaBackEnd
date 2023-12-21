const express = require('express');
const productsRouter = require('./api/productsRouter');
const cartsRouter = require('./api/cartsRouter');

const app = express();
const PORT = 8080;

app.use(express.json());
app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);

app.listen(PORT, () => {
    console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});