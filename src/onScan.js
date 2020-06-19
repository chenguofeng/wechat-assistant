/*
 * @Author: cgf
 * @Date: 2020-06-13 16:13:15
 * @LastEditors: cgf
 * @LastEditTime: 2020-06-13 16:16:53
 * @Description: 机器人需要扫描二维码时监听
 */
const Qrterminal = require("qrcode-terminal")

module.exports = function onScan(qrcode, status) {
  Qrterminal.generate(qrcode, { small: true })
}
