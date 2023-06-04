/*
 * @Author: yangyongqian
 * @Date: 2023-06-03 22:02:35
 * @Description: 分类页面接口路由
 */
const express = require('express')
const router = express.Router()

router.get('/categories', require('../controller/cate').cateData)

module.exports = router
