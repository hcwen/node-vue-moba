const mongoose = require('mongoose')
//创建数据库模型
const schema = new mongoose.Schema({
    name: { type: String }
})
//导出数据库模型，哪里需要使用就去哪里引用
module.exports = mongoose.model('Category', schema)