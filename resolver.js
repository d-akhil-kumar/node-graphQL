const employeesData = require('./data/employees')
const companinesData = require('./data/companies')
var helloData = require('./data/hello')

//2. write resolvers for your schemas
const resolvers = {
    Query : {
        hello: () => { return helloData},
        randomNumber: () => {
            return Math.floor(Math.random() * 10) + 1
        },
        employees: () => {
            return employeesData
        },
        companies: () => {
            return companinesData
        },
        employeeById: (parent, args, context, info) => {
            const emp = employeesData.find((d) => d.id === args.id)
            return emp
        }
    },
    Employee: {
        fullName: (parent, args, context, info) => {
            return parent.firstName + ' ' + parent.lastName
        }
    },
    Mutation: {
        updateHelloMsg: (parent, args, context, info) => {
            helloData = args.newMsg
            return helloData
        }
    }
}

module.exports = resolvers