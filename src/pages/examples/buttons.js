import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { CatPanel, CatIcon, CatButton } from '../../index.js';
import './index.less';

export default class Buttons extends Component {
  config = {
    navigationBarTitleText: 'CatButton 组件'
  }
  componentDidMount() {
    wx.login()
  }
  onGetUserInfo(e) {
    console.log('登录', e)
  }
  onGetPhoneNumber(e) {
    console.log('获取手机:', e)
  }
  render() {
    return (
      <View class="page-container">
        <View class="title">按钮示例</View>
        <CatPanel
          title="按钮类型"
          isLink
          linkDesc="更多信息"
        >
          <CatButton
            size="small"
            block
            className = "mb20"
          >
            default | small
          </CatButton>

          <CatButton
            type="danger"
            className = "mb20"
            block
          >
            danger | default
          </CatButton>

          <CatButton
            className = "mb20"
            block
            size="lager"
            type="warning"
          >
            warning | large
          </CatButton>
          <CatButton
            type="success"
            className = "mb20"
            block
          >
            success
          </CatButton>
          <CatButton
            type="primary"
            block
          >
            primary | theme
          </CatButton>                 
        </CatPanel>

        <CatPanel
          title='原始默认属性和事件'
          isNoBorder
          isNoBackground
        >
          <CatButton
            loading
            type="primary"
            block
            className = "mb20"
          >
            loading
          </CatButton>
          <CatButton
            disabled
            shape="circle"
            block
            className = "mb20"
          >
            disabled
          </CatButton>
          <CatButton
            openType="getUserInfo"
            onGetUserInfo={this.onGetUserInfo}
          >登录</CatButton>
          <CatButton
            className="mr10 ml10"
            renderPrefix={
              <CatIcon type="icon-evaluate" className="mr10" />
            }
            shape="circle"
            type="primary"
          >
            prefix icon button
          </CatButton>
          <CatButton
            renderSuffix={<CatIcon className='ml10' type="icon-evaluate_fill" />}
          >
            suffix button
          </CatButton>
        </CatPanel>
      </View>
    )
  }
}