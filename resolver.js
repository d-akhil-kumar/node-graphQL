const employeesData = require('./data/employees')
const companinesData = require('./data/companies')

//2. write resolvers for your schemas
const resolvers = {
    Query : {
        hello: () => { return 'hello graphQL world'},
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

    }
}

module.exports = resolvers