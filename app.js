const express = require('express')
const people = require('./seeds')
const app = express()
const cors = require('cors')

let counter = 0




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
