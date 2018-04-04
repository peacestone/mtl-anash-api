const express = require('express')

const people = require('./seeds')

const app = express()

app.get('/api/people', function (req, res) {
    res.json(people)
  })

app.listen(3001, () => console.log('running on port 3001'))
