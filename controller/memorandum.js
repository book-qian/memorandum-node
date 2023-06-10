/*
 * @Author: yangyongqian
 * @Date: 2023-06-08 22:18:48
 * @Description: 备忘录页面接口逻辑
 */

const fs = require('fs')

class MemorandumController {
  // 备忘录列表接口
  async memorandumList(req, res, next) {
    const listStr = fs
      .readFileSync('public/data/memorandumList.json')
      .toString()
    const result = JSON.parse(listStr)
    res.json(result)
  }
  // 备忘录详情接口
  async memorandumDetail(req, res, next) {
    const listStr = fs
      .readFileSync('public/data/memorandumDetail.json')
      .toString()
    const result = JSON.parse(listStr)
    res.json(result)
  }
}

module.exports = new MemorandumController()
