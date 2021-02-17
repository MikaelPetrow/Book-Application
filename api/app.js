// config
const config      = require('config')
const express     = require('express')
const cors        = require('cors')
const bodyParser  = require('body-parser')

// express app
const app = express()

// loaders
const routes = require('./routes')

// cors
var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions))

// app
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/api', routes)

// server port
const port = config.server.port
const host = config.server.host

// Start server
app.listen(port, host,  err => {
  if (err) {
    return new Error(err)
  }
  console.log(`Server is running on port ${port}`)
})

module.exports = app
