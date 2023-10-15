const { Schema, model } = require("mongoose");

const MediaSchema = Schema({
  serial: {
    type: String,
    required: [true, "Serial requerido"],
    unique: [true, "media ya existe"],
  },
  titulo: {
    type: String,
    required: [true, "Titulo requerido"],
  },
  sinopsis: {
    type: String,
    required: [true, "Sinopsis requerido"],
  },

  url: {
    type: String,
    required: [true, "url requerido"],
    unique: [true, "url ya existe"],
  },

  imagen: {
    type: String,
    required: [true, "imagen requerida"],
  },

  fechaCreacion: {
    type: Date,
    default: new Date(),
  },
  fechaActualizacion: {
    type: Date,
    default: new Date(),
  },

  anoestreno: {
    type: Date,
    default: new Date(),
  },

  genero: {
    type: Schema.Types.ObjectId,
    ref: "Genero",
    required: true,
  },

  tipo: {
    type: Schema.Types.ObjectId,
    ref: "Tipo",
    required: true,
  },

  director: {
    type: Schema.Types.ObjectId,
    ref: "Director",
    required: true,
  },

  productora: {
    type: Schema.Types.ObjectId,
    ref: "Productora",
    required: true,
  },
});

module.exports = model("Media", MediaSchema);
