/*
 * @Author: yangyongqian
 * @Date: 2023-05-30 22:24:35
 * @Description:备忘录入口文件
 */
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
// 引入中间件
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// 注册首页接口
app.use('/api/public/v1/home', require('./router/home'))
// 注册分类页面接口
app.use('/api/public/v1/cate', require('./router/cate'))
// 注册备忘录接口
app.use('/api/public/v1/goods', require('./router/memorandum'))

// 静态资源服务器
app.use(express.static('./public'))

app.listen('8090', () => {
  const url = 'http://127.0.0.1:8090'
  console.log(`服务启动成功${url}`)
})
