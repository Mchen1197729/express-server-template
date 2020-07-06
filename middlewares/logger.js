/*
* 这是一个可以用于记录请求和响应的中间件
* 可以用于记录所有的接口请求记录 存入数据库
* */

const LoggerModel = require('../db/mongodb/models/loggerModel')

const logger = () => {
  return (req, res, next) => {
    //在此处得到所有请求的信息
    const {method, url, body} = req
    const req_time = Date.now()
    console.log(method, url, body)
    next()
    //如何在此处得到关于响应的信息呢?
    //目前的处理方法:在每一个请求处理的方法中 将响应的数据设置为res.locals.data属性 这样就可以在此处获取到响应的数据了
    //console.log(res.locals.data)
    const res_time = Date.now()
    //在这里将此次请求和响应的数据记录下来
    LoggerModel.create({
      req: {url, method, payload: body || {}, req_time},
      res: {
        status: 200, data: res.locals.data, res_time
      }
    }, (error, result) => {
      if (error) {
        console.log(error)
      } else {
        console.log(result)
      }
    })
  }
}

module.exports = logger
