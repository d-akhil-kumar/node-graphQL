const employeesData = require('./data/employees')

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

module.exports = resolvers