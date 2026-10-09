const express = require("express");

const app = express();

app.use(express.static("public"));

const productos = require("./productos");
const productosController = require("./controladores/productosController");


app.get("/productos", productosController.obtenerProductos);

app.get("/productos/:id", productosController.obtenerProducto);

app.use((solicitud, respuesta, next) => {
    respuesta.status(404).send('Recurso no encontrado');
   });


app.listen(4000, () => {
    console.log("Servidor corriendo en http://localhost:4000");
});