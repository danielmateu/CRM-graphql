const { default: mongoose } = require("mongoose");

const ProductoSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true // Elimina espacios en blanco al inicio y al final
    },
    existencia: {
        type: Number,
        required: true,
        trim: true // Elimina espacios en blanco al inicio y al final
    },
    precio: {
        type: Number,
        required: true,
        trim: true // Elimina espacios en blanco al inicio y al final
    },
    creado: {
        type: Date,
        default: Date.now()
    }
})

ProductoSchema.index({ nombre: 'text' });

module.exports = mongoose.model("Producto", ProductoSchema);