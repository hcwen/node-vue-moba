const express = require("express")

const app = express()
//引用跨域模块
app.use(require('cors')())
//数据库中使用json格式文件
app.use(express.json())

require('./routes/admin')(app)
require('./plugins/db.js')(app)
app.listen(3000, () => {
    console.log('App listening on port 3000');
})