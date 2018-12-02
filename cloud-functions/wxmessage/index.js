const sendMessage = require('./sendMessage');
const cloud = require('wx-server-sdk');

cloud.init({
  env: 'tryzf-e3bb6b',
});
/**
 * 配置选项
 */
const secret = '97d878276e3a5e1c00f64d72e4d40a0d'; // 小程序 secret id
const tid = 'ZAXB6GDM9d360r0yDADbRyqytqli2Un2k-2E-p6LCq0'; // 模板 id，非必填，也可以从小程序端上传

/**
 * 统一回参
 * @param {Function} callback
 * @param {Integer} code
 * @param {Object} data
 */
function renderReturn(callback, code = 0, data = {}) {
  callback(null, {
      code: code,
      data: data
  });
}

/**
 * 云函数主入口
 * @param {Object} event 请求参数
 * @param {String} event.code 用户登录凭证
 * @param {String} event.formId 表单提交中携带的 from_id
 * @param {String} event.prepayId 支付场景中的 prepayId
 * @param {Object} event.data 模板内容
 * @param {string} event.page 点击模板卡片后的跳转页
 * @param {string} event.userInfo 用户的 openId，和小程序的 appId
 * @param {string} event.templateId 模板 id
 * @param {Object} context
 * @param {Function} callback 云函数回调
 */
exports.main = async (event, context, callback) => {
  const { formId, data, page, prepayId } = event;
  const {
    OPENID,
    APPID,
    UNIONID,
  } = cloud.getWXContext();
  const templateId = event.templateId || tid;

  return sendMessage({
    appId: APPID,
    openId: OPENID,
    secret,
    templateId,
    formId: formId || prepayId,
    data,
    page
  }).then(msg => renderReturn(callback, 0, msg))
    .catch(err => renderReturn(callback, 1, err));
};