require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const routes = require('./routes')

const server = express()

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_URL}`, {
  useNewUrlParser: true
})

server.use(cors())
server.use(express.json())
server.use(routes)

server.listen(process.env.PORT || 3333)
