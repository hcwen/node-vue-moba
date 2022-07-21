module.exports = app => {
    const express = require('express')
    //创建express的子路由
    const router = express.Router()
    //引用数据库模型
    const Category = require("../../models/Category")
    //创建分类路由
    router.post('/categories', async (req, res) => {
        const model = await Category.create(req.body)
        res.send(model)
    })
    router.post('/categories', async (req, res) => {
        const model = await Category.create(req.body)
        res.send(model)
    })
    router.get('/categories', async (req, res) => {
        const items = await Category.find()
        res.send(items)
    })
    app.use('/admin/api', router)

}