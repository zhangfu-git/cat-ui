import Taro, { Component } from '@tarojs/taro';
import { View, Button, Block, Image } from '@tarojs/components';
import './index.less';

export default class StandarLogin extends Component {
  constructor(props) {
    super(props);
  }
  handleGetUserInfo(res) {
    const wx_user = res.detail;
    wx.setStorageSync('WX_USER', wx_user);
    wx.setStorageSync('WX_USER_INFO', wx_user.userInfo);
    wx.showToast({
      title: '登录成功',
      type: 'success'
    })
    this.props.onHide(wx_user);
  }
  render() {
    return (
      <Block>
        {
          this.props.isShow
          &&
          <View className="standar-login">
            <View class="tips">
              <Image mode="aspectFit" src="/images/logo.jpg"></Image>
              <View>cat-ui</View>
            </View>
            <Button open-type="getUserInfo" onGetUserInfo={this.handleGetUserInfo.bind(this)}>登录</Button>
          </View>
        }
      </Block>
    )
  }
}