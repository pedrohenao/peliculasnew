const Director = require("../models/director");
const { request, response } = require("express");

/**
 * Crear genero
 */
const createDirector = async (req = request, res = response) => {
  // endpoint
  //console.log(req.body)
  const { nombre } = req.body;
  try {
    const directorDB = await Director.findOne({ nombre });

    if (directorDB) {
      return res.status(400).json({ mjs: "Ya existe director" });
    } // select * from generos where nombre = ?

    const datos = {
      nombre,
    };

    const director = new Director(datos);

    await director.save();

    return res.status(201).json(director);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msj: error });
  }
};

/**
 * consultar todos los directores
 */
const getDirector = async (req = request, res = response) => {
  try {
    const { estado } = req.query;

    const directores = await Director.find({ estado });

    return res.json(directores);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msj: error });
  }
};

/**
 * Borrar un género
 */

const deleteDirectorByID = async (req = request, res = response) => {
  try {
    const { id } = req.params;
    await Director.findByIdAndDelete({ _id: id });
    return res.status(204).json({});
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msj: error });
  }
};
module.exports = {
  createDirector,
  getDirector,
  deleteDirectorByID,
};
