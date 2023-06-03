/*
 * @Author: yangyongqian
 * @Date: 2023-05-31 20:32:38
 * @Description:首页接口路由
 */
const express = require('express')
const router = express.Router()

router.get('/swiperdata', require('../controller/home').rotograph)
router.get('/catitems', require('../controller/home').memorandumType)
router.get('/floorData', require('../controller/home').memorandumFloor)

module.exports = router
