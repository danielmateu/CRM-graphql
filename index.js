const { ApolloServer, gql } = require('apollo-server');
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');

// Schema
const typeDefs = gql`

    type Curso {
        titulo: String
        tecnologia: String
    }

    type Tecnologia {
        tecnologia: String
    }

    type Query {
        obtenerCursos: [Curso]
        obtenerTecnologia: [Tecnologia]
    }
`

const cursos = [
    {
        titulo: 'JavaScript Moderno Guía Definitiva Construye +10 Proyectos',
        tecnologia: 'JavaScript ES6',
    },
    {
        titulo: 'React – La Guía Completa: Hooks Context Redux MERN +15 Apps',
        tecnologia: 'React',
    },
    {
        titulo: 'Node.js – Bootcamp Desarrollo Web inc. MVC y REST API’s',
        tecnologia: 'Node.js'
    },
    {
        titulo: 'ReactJS Avanzado – FullStack React GraphQL y Apollo',
        tecnologia: 'React'
    }
];


// Resolvers
const resolvers = {
    Query: {
        obtenerCursos: () => cursos, 
        obtenerTecnologia: () => cursos
    }
}


// Servidor
const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [
        ApolloServerPluginLandingPageGraphQLPlayground(),
    ]
})

// Conectar Schema con Resolvers


// Arrancar el servidor
server.listen().then(({ url }) => {
    console.log(`Servidor listo en la URL ${url}`)
})