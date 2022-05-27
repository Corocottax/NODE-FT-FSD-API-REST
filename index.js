//----Importamos Express para poder crear un servidor
const express = require("express");
//----Importamos dotenv para poder acceder a las claves de cloudinary en el .env y lo configuramos
const dotenv = require("dotenv");
dotenv.config();

//----Importamos la función connect para conectarnos con la base de datos
const { connect } = require("./src/utils/database");
//----Ejecutamos la función:
connect();

//----Creamos nuestro servidor express
const server = express();

//----Almacenamos el valor de nuestra variable de entorno PORT, si no accede tendrá el 8000 por defecto:
const PORT = process.env.PORT || 8080;

//----Con esta función Express transformará los datos a JSON para poder tratarlos
server.use(express.json());
//----Con esta función Express no codifica caracteres reservados en la URI.
server.use(express.urlencoded({ extended: false }));

//* ENDPOINTS:
//----Importamos las rutas de peliculas
const PeliculasRoutes = require("./src/api/routes/pelicula.routes");
//----Y las usamos en el servidor:
server.use("/peliculas", PeliculasRoutes);

//----Capturamos el error si la ruta no existe
server.use("*", (req, res, next) => {
    return next("Ruta no encontrada");
});

//----Escuchamos nuestro servidor en el puerto deseado
server.listen(PORT, () => {
    console.log(`Servidor arrancado en http://localhost:${PORT}`);
});