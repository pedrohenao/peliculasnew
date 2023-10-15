const { Schema, model } = require("mongoose");

const ProductoraSchema = Schema({
  nombre: {
    type: String,
    required: [true, "Nombre de genero requerido"],
    minlenght: 1,
  },
  estado: {
    type: Boolean,
    default: true,
    required: true,
  },
  fechaCreacion: {
    type: Date,
    default: new Date(),
  },
  fechaActualizacion: {
    type: Date,
    default: new Date(),
  },

  descripcion: {
    type: String,
  },

  slogan: {
    type: String,
  },
});

module.exports = model("Productora", ProductoraSchema);
