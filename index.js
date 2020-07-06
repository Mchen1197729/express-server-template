const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const connection = require('./db/mongodb/index')

const logger = require('./middlewares/logger')

//分配路由
const userRouter = require('./router/user')

const app = express()

app.use(cors()) // enable cross origin request sources

app.use(bodyParser.json()) // parse application/json

app.use(bodyParser.urlencoded({extended: false})) // parse application/x-www-form-urlencoded

app.use(logger()) // use the `logger` middleware

app.get('/', (req, res) => {
  res.send({
    code: 0,
    msg: 'request success'
  })
})

app.use('/user', userRouter)

connection.on('connected', () => {
  console.log('database connect success')

  app.listen(5400, () => {
    console.log('app is running at port 5400')
  })
})
