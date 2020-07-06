const mongoose = require('mongoose')

//1.连接数据库
mongoose.connect('mongodb://localhost:27017/wanjia', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

//2.获取连接对象
const connection = mongoose.connection

module.exports = connection
