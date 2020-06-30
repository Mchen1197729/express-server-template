const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const connection = require('./db')

//分配路由
const userRouter = require('./router/user')

const app = express()
// enable cross origin request sources
app.use(cors())
// parse application/json
app.use(bodyParser.json())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

app.get('/', (req, res) => {
  res.send({
    code: 0,
    msg: 'request success'
  })
})

app.use('/user', userRouter)

connection.connect(error => {
  if (error) {
    console.log('database connect error')
  } else {
    console.log('database connect success')
    app.listen(5400, () => {
      console.log('app is running at port 5400')
    })
  }
})


