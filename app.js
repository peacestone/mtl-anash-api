const express = require('express')
const people = require('./seeds')
const app = express()
const cors = require('cors')
require('dotenv').config()

const db = require('./db/db')

let counter = 0

db.one('SELECT $1 AS value', 123)
  .then(function (data) {
    console.log('DATA:', data.value)
  })
  .catch(function (error) {
    console.log('ERROR:', error)
  })

const logger = (req, res, next) => {
  console.log(`req number ${++counter}`)
  next()
}


app.use(logger, cors({
  origin: 'http://localhost:3000'
}))



app.get('/api/people', function (req, res) {
 res.json(people)
  })

app.listen(3001, () => console.log('running on port 3001'))
