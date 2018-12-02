const {
  WXMINIUser,
  WXMINIMessage,
} = require('wx-js-utils');

module.exports = async function({
  appId,
  secret,
  templateId,
  formId,
  data,
  page,
  openId
}) {
  const wxMiniUser = new WXMINIUser({ appId, secret });
  const access_token = await wxMiniUser.getAccessToken();

  if (!openId) {
    const { openId } = await wxMiniUser.codeToSession();
  }
  const wxMiniMessage = new WXMINIMessage({ openId, formId, templateId });

  return wxMiniMessage.sendMessage({
    access_token,
    data,
    page
  });
}