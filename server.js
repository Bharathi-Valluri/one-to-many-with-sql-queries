const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()
const cors = require('cors')
const router = require('./router/router')
const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

function run () {
  console.log(`datasource initialized`)
  app.use('/', router)
  app.listen(process.env.PORT, () => {
    console.log(`server is listining at ${process.env.PORT}`)
  })
}

run()
