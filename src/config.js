/*
 * @Author: cgf
 * @Date: 2020-06-13 16:13:15
 * @LastEditors: cgf
 * @LastEditTime: 2020-06-13 16:16:53
 * @Description: 配置项
 */

module.exports = {
  // puppet_padplus Token
  token: "puppet_padplus_YourToken",
  // 机器人名字
  name: "E.T",
  // 房间/群聊
  room: {
    // 管理群组列表
    roomList: {
      // 群名(用于展示，最好是群名，可随意) : 群id(这个可不能随意)
      微信读书群: "*****@chatroom",
      测试群: "*****@chatroom"
    }
    // 加入房间回复
    // ,roomJoinReply: `欢迎进群`
  },
  // 私人
  personal: {
    // 好友验证自动通过关键字
    addFriendKeywords: ["加群", "微信读书"],
    // 是否开启加群
    addRoom: true
  }
}
