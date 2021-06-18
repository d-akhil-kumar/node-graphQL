const express = require('express')
const app = express()

const {ApolloServer, gql} = require('apollo-server-express')


//1. define schemas here
const typeDefs = gql`  
  type Query {
      hello : String
  }
`

//2. write resolvers for your schemas
const resolvers = {
    Query : {
        hello: () => { return 'hello graphQL world'}
    }
}


//3. Initialize the ApolloExpressServer
const server = new ApolloServer({typeDefs, resolvers})

//4. set apollo server on top of express app
server.applyMiddleware({app})



const port = 3300
app.listen(port, () => {
    console.log('server is running on port ' + port)
    console.log(`Default ApolloGQL server path ${server.graphqlPath}`)
})