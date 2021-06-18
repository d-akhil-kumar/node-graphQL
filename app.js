const express = require('express')
const app = express()

const {ApolloServer} = require('apollo-server-express')


const typeDefs = require('./schema')
const resolvers = require('./resolver')


//3. Initialize the ApolloExpressServer
const server = new ApolloServer({typeDefs, resolvers})

//4. set apollo server on top of express app
server.applyMiddleware({app})



const port = 3300
app.listen(port, () => {
    console.log('server is running on port ' + port)
    console.log(`Default ApolloGQL server path ${server.graphqlPath}`)
})