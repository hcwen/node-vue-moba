module.exports = app => {
    //创建和连接数据库node-vue-moba
    const mongoose = require('mongoose')
    mongoose.connect('mongodb://127.0.0.1:27017/node-vue-moba', {
        useNewUrlParser: true
    })
}