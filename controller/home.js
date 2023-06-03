/*
 * @Author: yangyongqian
 * @Date: 2023-05-31 20:29:18
 * @Description:首页接口逻辑
 */
const fs = require('fs') // 文件系统模块
class HomeController {
  // 轮播图接口
  async rotograph(req, res, next) {
    const listStr = fs.readFileSync('public/data/rotograph.json').toString()
    const result = JSON.parse(listStr)
    res.json(result)
  }

  // 备忘录分类接口
  async memorandumType(req, res, next) {
    const listStr = fs
      .readFileSync('public/data/memorandumType.json')
      .toString()
    const result = JSON.parse(listStr)
    res.json(result)
  }

  // 备忘录楼层接口
  async memorandumFloor(req, res, next) {
    const listStr = fs
      .readFileSync('public/data/memorandumFloor.json')
      .toString()
    const result = JSON.parse(listStr)
    res.json(result)
  }
}

module.exports = new HomeController()
