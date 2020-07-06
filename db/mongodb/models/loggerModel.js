const mongoose = require('mongoose')

const LoggerSchema = new mongoose.Schema({
  req: {
    url: String,      // 请求地址
    method: String,   // 请求方式
    payload: Object,  // 请求的数据
    req_time: Date,   // 请求的时间
  },
  res: {
    status: Number,   // 响应的状态码
    data: Object,     // 响应的数据
    res_time: Date    // 响应的时间
  }
}, {versionKey: false})

const LoggerModel = mongoose.model('Logger', LoggerSchema) //默认会使用loggers表(自动创建 小写复数)

module.exports = LoggerModel
