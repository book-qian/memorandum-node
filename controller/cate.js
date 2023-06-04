/*
 * @Author: yangyongqian
 * @Date: 2023-06-03 22:03:18
 * @Description:分类页面接口逻辑
 */
const fs = require('fs')
class CateController {
  // 分类数据接口
  async cateData(req, res, next) {
    const listStr = fs.readFileSync('public/data/cateData.json').toString()
    const result = JSON.parse(listStr)
    res.json(result)
  }
}

module.exports = new CateController()
