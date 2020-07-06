const mysql = require('mysql')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'hello123',
  database: 'wanjia'
})

module.exports = connection
