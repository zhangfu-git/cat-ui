// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: 'tryzf-e3bb6b',
})
const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  const {
    OPENID,
    APPID,
    UNIONID,
  } = cloud.getWXContext();
  try {
    const user = await db.collection('user').where({
      userInfo: {
        openId: OPENID
      }
    }).get()
    if (user.data.length) {
      return Promise.resolve(OPENID);
    } else {
      await db.collection('user').add({
        data: {
          ...event
        }
      })
      return Promise.resolve(OPENID)
    }
  } catch(e) {
    return Promise.reject(e)
  }
}