const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/',(req,res) => {
    res.send('Hola Mundo, estamos en SENATI desplegando nuestro Paas, 2025.');
});

app.listen(port, () => {
    console.log('Aplicación escuchando el puerto $(port)');
}) 