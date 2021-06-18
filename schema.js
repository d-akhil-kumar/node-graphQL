const {gql} = require('apollo-server-express')

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

module.exports = typeDefs