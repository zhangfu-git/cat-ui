import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import FormButton from '../../components/CatFormButton';
import { formatTime } from '../../utils/util.js';
import './index.less';

const logo = require('../../images/logo.jpg');

export default class Detail extends Component {
  config = {
    navigationBarTitleText: '小程序组件cat-ui'
  }
  constructor() {
    super();
    this.getFormId = this.getFormId
  }
  onGetFormId(e) {
    const formId = e.detail.formId;
    this.sendMessage(formId)
    console.log('点击了表单按钮', formId)
    Taro.navigateTo({
      url: '/pages/index/index'
    })
  }
  sendMessage(formId) {
    const templateId = '2rcHhebQyLfbNTDbCOol1bJLvU_E52fDWB2uzB7NVBw';
    const wx_user_info = wx.getStorageSync('WX_USER_INFO');
    const nickName = wx_user_info ? wx_user_info.nickName : '神秘人';
    const time = formatTime(new Date());
    console.log(time)
    wx.cloud.callFunction({
      name: 'wxmessage',
      data: {
        templateId,
        data: {
          keyword1: {
            value: nickName
          },
          keyword2: {
            value: 'cat-ui'
          },
          keyword3: {
            value: time
          },
          keyword4: {
            value: '我好像在哪里见过你'
          }
        },
        page: 'index?type=1',
        formId: formId
      }
    })
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log('失败', err)
    })
  }
  render() {
    return (
      <View class="guide-page">
        <View className="main">
          <Image mode="aspectFit" class="logo" src={logo}></Image>
          <View className="title">cat-ui</View>
          <Text class="tips">基于taro构建的小程序UI</Text>
        </View>
        <View className="footer">
          <FormButton
            onGetFormId={this.onGetFormId}
            size="large"
            type="theme"
          >
            进入
          </FormButton>
        </View>
      </View>
    )
  }
}