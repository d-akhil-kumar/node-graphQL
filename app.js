const express = require('express')
const app = express()

app.get('/', (req,res,next)=> {
    res.send('Welcome To a GraphQL Demo Application')
})


const port = 3300

app.listen(port, () => {
    console.log('server is running on port ' + port)
})