//Importamos mongoose para conectarnos con la base de datos, ya que vamos a enviar información
const mongoose = require("mongoose");

//Importamos el modelo pelicula en este archivo para poder inyectar información de tipo pelicula.
const Pelicula = require("../api/models/pelicula.model");

//Vamos a definir un array de peliculas que se ciñan al modelo pelicula
const peliculas = [
  {
    titulo: "Star Wars",
    año: 1977,
    caratula:
      "https://i.etsystatic.com/14140434/r/il/a66d02/1502637303/il_fullxfull.1502637303_mnu2.jpg",
  },
  {
    titulo: "Top Gun",
    caratula: "https://m.media-amazon.com/images/I/616OBt164PL._AC_SY741_.jpg",
  },
  {
    titulo: "Desafio Total",
    año: 1990,
    caratula: "https://image.posterlounge.es/images/big/1875920.jpg"
  },
  {
    titulo: "Monstruos S.A.",
    año: 1990,
    caratula: "https://img.huffingtonpost.com/asset/60e591213b0000424decb71e.jpeg?cache=114shS9M4s&ops=1778_1000"
  }
];

//Con este mapeo creo muchas peliculas del tipo peliculas recorriendo el array de objetos que he definido
const peliculasDocuments = peliculas.map((pelicula) => new Pelicula(pelicula));

//Vamos a realizar la conexión con MONGO para insertar los documentos
mongoose
  .connect("mongodb://localhost:27017/cine", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    //Mediante el metodo find obtendremos un array con todas las peliculas de mi base de datos
    const allpeliculas = await Pelicula.find();
    //Si allpeliculas tiene longitud borraremos la coleccion entera
    if (allpeliculas.length) {
      await Pelicula.collection.drop();
      console.log("peliculas DB deleted")
    }
  })
  .catch((error) => console.log("Error deleting peliculas", error))
  //Si no hay peliculas me insertas cuantas tengas en peliculasDocument
  .then(async () => {
    await Pelicula.insertMany(peliculasDocuments);
    console.log("peliculas DB created")
  })
  .catch((error) => console.log("Error creating peliculas", error))
  //Al final del todo nos desconectamos de mongoose
  .finally(() => mongoose.disconnect());