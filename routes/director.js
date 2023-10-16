const { Router } = require("express");
const {
  createDirector,
  getDirector,
  deleteDirectorByID,
} = require("../controllers/director");

const router = Router();

/**
 * Crear genero
 */
router.post("/", createDirector);

/**
 * consultar todos los géneros
 */
router.get("/", getDirector);
/**
 * Consultar un género por su ID
 */

/**
 * Actualizar genero
 */

/**
 * Borrar un género
 */

router.delete("/:id", deleteDirectorByID);

module.exports = router;
