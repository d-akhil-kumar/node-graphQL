const express = require('express')
const app = express()

const {ApolloServer, gql} = require('apollo-server-express')

const employeesData = require('./data/employees')


//1. define schemas here
const typeDefs = gql`

  type Employee {
      id: ID!
      firstName: String
      lastName: String
      jobLevel: Int
  }

  type Query {
      hello : String,
      randomNumber: Int,
      employees: [Employee]
  }
`

//2. write resolvers for your schemas
const resolvers = {
    Query : {
        hello: () => { return 'hello graphQL world'},
        randomNumber: () => {
            return Math.floor(Math.random() * 10) + 1
        },
        employees: () => {
            return employeesData
        }
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