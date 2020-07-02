/*
* 这是一个可以用于记录请求和响应的中间件
* 可以用于记录所有的接口请求记录 存入数据库
* */

const logger = () => {
  return (req, res, next) => {
    //在此处得到所有请求的信息
    console.log('>>>111')
    next()
    //如何在此处得到关于响应的信息呢?
    //目前的处理方法:在每一个请求处理的方法中 将响应的数据设置为res.locals.data属性 这样就可以在此处获取到响应的数据了
    console.log(res.locals.data)
  }
}

module.exports = logger
