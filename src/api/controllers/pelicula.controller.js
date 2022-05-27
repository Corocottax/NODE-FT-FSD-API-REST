// me traigo el modelo de las peliculas
const Pelicula = require("../models/pelicula.model");

// creamos nuestro método getAllPeliculas
const getPeliculas = async (req, res, next) => {

    try {

        // hacemos el .find para encontrarlas
        const allPeliculas = await Pelicula.find();

        // devolvemos el resultado
        return res.status(200).json(allPeliculas);
        
    } catch (error) {
        return next(error);
    }

}

// creamos nuestro método getPeliculaByID
const getPeliculaByID = async (req, res, next) => {

    try {

        // recogeremos el id que nos llega de los parámetros de la url
        const { id } = req.params;

        // hacemos el .findById para encontrarla
        const PeliculaDB = await Pelicula.findById(id);

        // devolvemos el resultado
        return res.status(200).json(PeliculaDB);
        
    } catch (error) {
        return next(error);
    }

}


const getPeliculaByTitulo = async (req, res, next) => {

    try {

        // recogeremos el titulo que nos llega de los parámetros de la url
        const { titulo } = req.params;

        // hacemos el .find con el título para encontrarla
        const PeliculaDB = await Pelicula.findOne({ titulo: titulo });

        // devolvemos el resultado
        return res.status(200).json(PeliculaDB);
        
    } catch (error) {
        return next(error);
    }

}

const getPeliculasByYear = async (req, res, next) => {

    try {

        // recogemos el año por parámetro
        const { year } = req.params

        // buscamos todas las peliculas que sean de ese año
        const Peliculas = await Pelicula.find({ año: year });

        // devolvemos el resultado
        return res.status(200).json(Peliculas);
        
    } catch (error) {
        return next(error)
    }

}

const postNewPelicula = async (req, res, next) => {

    try {

        const newPelicula = new Pelicula(req.body);

        const peliculaDB = await newPelicula.save();

        return res.status(200).json(peliculaDB);
        
    } catch (error) {
        return next(error);
    }

}

const deletePelicula = async (req, res, next) => {

    try {

        const { id } = req.params;

        const peliculaBorrada = await Pelicula.findByIdAndDelete(id)

        return res.status(200).json(peliculaBorrada);
        
    } catch (error) {
        return next(error)
    }

}

const patchPelicula = async (req, res, next) => {

    try {

        const { id } = req.params;

        const patchPelicula = new Pelicula(req.body);

        patchPelicula._id = id;

        const PeliculaDB = await Pelicula.findByIdAndUpdate(id, patchPelicula);

        return res.status(200).json({ nuevo: patchPelicula, vieja: PeliculaDB})
        
    } catch (error) {
        return next(error)
    }

}

module.exports = {

    getPeliculas,
    getPeliculaByID,
    getPeliculaByTitulo,
    getPeliculasByYear,
    postNewPelicula,
    deletePelicula,
    patchPelicula

}