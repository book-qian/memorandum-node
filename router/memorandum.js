/*
 * @Author: yangyongqian
 * @Date: 2023-06-08 22:16:01
 * @Description:备忘录列表接口路由
 */

const express = require('express')
const router = express.Router()

router.get('/search', require('../controller/memorandum').memorandumList)
router.get('/detail', require('../controller/memorandum').memorandumDetail)

module.exports = router
