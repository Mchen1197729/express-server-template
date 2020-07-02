const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

//自定义中间件
const logger = require('./middles/logger')

//分配路由
const userRouter = require('./router/user')
const uploadRouter = require('./router/upload')

const app = express()
// enable cross origin request sources
app.use(cors())
// parse application/json
app.use(bodyParser.json())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))
app.use(logger())

app.get('/', (req, res) => {
  res.send({
    code: 0,
    msg: 'request success'
  })
})

app.use('/user', userRouter)
app.use('/upload', uploadRouter)


app.listen(5400, () => {
  console.log('app is running at port 5400')
})
