const { Router } = require("express");
const {
  createGenero,
  getGeneros,
  deleteGeneroByID,
} = require("../controllers/genero");

const router = Router();

/**
 * Crear genero
 */
router.post("/", createGenero);

/**
 * consultar todos los géneros
 */
router.get("/", getGeneros);
/**
 * Consultar un género por su ID
 */

/**
 * Actualizar genero
 */

/**
 * Borrar un género
 */

router.delete("/:id", deleteGeneroByID);

module.exports = router;
