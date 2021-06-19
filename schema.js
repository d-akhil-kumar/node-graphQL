const {gql} = require('apollo-server-express')

//1. define schemas here
const typeDefs = gql`

  type Company {
    id: ID!
    name: String
    description: String
  }

  type Employee {
      id: ID!
      firstName: String
      lastName: String
      jobLevel: Int
      companyId: String
      company: Company
      fullName: String
  }

  type Query {
      hello : String
      randomNumber: Int
      employees: [Employee]
      companies: [Company]
      employeeById (id: ID!) : Employee
  }

  type Mutation {
    updateHelloMsg (newMsg : String!) : String!
  }
`

module.exports = typeDefs