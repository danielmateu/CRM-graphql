const { default: mongoose } = require("mongoose");

const UsuarioSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true // Elimina espacios en blanco al inicio y al final
    },
    apellido: {
        type: String,
        required: true,
        trim: true // Elimina espacios en blanco al inicio y al final
    },
    email: {
        type: String,
        required: true,
        trim: true, // Elimina espacios en blanco al inicio y al final
        unique: true // No puede haber dos usuarios con el mismo email
    },
    password: {
        type: String,
        required: true,
        trim: true // Elimina espacios en blanco al inicio y al final
    },
    creado: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model("Usuario", UsuarioSchema);