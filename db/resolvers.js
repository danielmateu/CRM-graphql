const Usuario = require('../config/models/Usuario');

// Resolvers
const resolvers = {
    Query: {
        // obtenerTecnologia: () => cursos
        obtenerCurso: () => 'GraphQL'
    },
    Mutation: {
        nuevoUsuario: async (_, { input }) => {

            const { email, password } = input;

            // Revisar si el usuario ya está registrado
            const existeUsuario = await Usuario.findOne({ email });
            if (existeUsuario) {
                throw new Error('El usuario ya está registrado');
            }

            // Hasear el Password
            const salt = await bcryptjs.genSalt(10); 


            try {
                const usuario = new Usuario(input);
                // Guardarlo en la base de datos
                usuario.save(); // Guardarlo
                return usuario;
            } catch (error) {
                console.log(error);
            }
        }
    },

}

module.exports = resolvers;