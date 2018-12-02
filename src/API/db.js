// 初始化云服务
wx.cloud.init({
  env: 'tryzf-e3bb6b',
  traceUser: true
});
// 初始化云数据库
const db = wx.cloud.database();