//----Importamos mongoose para crear el modelo en la base de datos
const mongoose = require("mongoose");

//? CREACIÓN DEL ESQUEMA
//----Creamos nuestro esquema de pelicula
//----Con sus campos titulo, año, etc.
const peliculaSchema = new mongoose.Schema({

    titulo: { type: String, trim: true, required: true },
    año: { type: Number, trim: true, required: false },
    descripcion: { type: String, trim: true, required: false },
    caratula: { type: String, trim: true, required: true },

}, { timestamps: true});
//----Timestamps añadirá propiedades a nuestra base de datos que indican el momento en el que se ha creado la nueva pelicula.

//----Llamamos Pelicula a nuestro modelo y le decimos que la colección va a ser peliculas, y el esquema que vamos a utilizar va a ser peliculaSchema creado anteriormente
const Pelicula = mongoose.model('peliculas', peliculaSchema);


//* EXPORTAMOS
//----Exportamos nuestro modelo de Pelicula
module.exports = Pelicula;