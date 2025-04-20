const express = require('express');
const {CosmosClient} = require('@azure/cosmos'); 
const app = express();
const port = process.env.PORT || 3000;

//Configuración de Cosmos DB
const cosmosCliente = new CosmosClient(process.env.COSMOS_DB_CONECTION_STRING);
const database = cosmosCliente.database('academic-db');
const container-databse.container('student');
app.use(express.json());

// Ruta para insertar datos
app.post('/student', async (req, res) => {
    try {
        const { body } = req;
        const { resource: createItem } = await container.item.create(body);
        res.status(201).send(createItem);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Ruta para obtener datos
app.get('/student', async (req, res) => {
    try {
        const { resource } = await container.item.readAll().fetchAll(); // Corrected the typo here
        res.status(200).send(resource);
    } catch (error) {
        res.status(500).send(error);
    }
});

    

app.get('/',(req,res) => {
    res.send('Hola Mundo, estamos en SENATI desplegando nuestro Paas, 2025.');
});

app.listen(port, () => {
    console.log('Aplicación escuchando el puerto $(port)');
}); 
