//---- Ahora, traemos nuestras rutas para gestionarlo con express
const PeliculasRoutes = require('express').Router();

//---- Nos traemos todas las funciones que acabamos de crear en nuestro controlador
const { getPeliculas, getPeliculaByID, getPeliculaByTitulo, getPeliculasByYear, postNewPelicula, deletePelicula, patchPelicula } = require('../controllers/pelicula.controller');

//! RUTAS
//---- Aquí tenemos nuestras rutas, con sus métodos y el controlador que acciona esta ruta
PeliculasRoutes.get('/', getPeliculas);
PeliculasRoutes.get('/id/:id', getPeliculaByID);
PeliculasRoutes.get('/titulo/:titulo', getPeliculaByTitulo);
PeliculasRoutes.get('/year/:year', getPeliculasByYear);
PeliculasRoutes.post('/', postNewPelicula);
PeliculasRoutes.delete('/:id', deletePelicula);
PeliculasRoutes.patch('/:id', patchPelicula)
/* router.metodo("endpoint", funcion) */


//* EXPORTAMOS
//---- Exportamos nuestras rutas
module.exports = PeliculasRoutes