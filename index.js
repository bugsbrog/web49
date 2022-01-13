// to inject the config vars inside the .env
require('dotenv').config()

// const cohort1 = process.argv[2]
// const user = process.env.USER
// const shell = process.env.SHELL

// if (cohort1 === 'web-49-rocks') {
//     console.log(`${cohort1}IS AWESOME`)
// } else {
//     console.log(`BOOOOO cohort ${cohort1}`)
// }

// console.log(`This user is ${user}`)
// console.log(`This shell is ${shell}`)

const express = require('express')
const app = express()

app.get('/hello', (req, res) => {
    res.json({ message: 'Hello there'})
})

// heroku wants to set its own port
const port = process.env.PORT || 9000 
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
