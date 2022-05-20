const fs = require('fs')
const express = require('express')
const app = express()

const data = JSON.parse(fs.readFileSync('./sample1.json'))
const users = data.users
console.log(users)

app.get('/list', (req, res) => {
    res.send(users)
})

app.listen(3000, () => {console.log('Is running...')})