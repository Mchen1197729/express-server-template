const express = require('express')

const router = express.Router()


router.get('/', (req, res) => {

  res.send({code: 0, msg: 'request success'})

  //目前的解决办法:给res.locals.data设置为响应的内容 然后再在中间件中获取res.locals.data
  res.locals.data = {code: 0, msg: 'request success'}
})

module.exports = router
