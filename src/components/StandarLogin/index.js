import Taro, { Component } from '@tarojs/taro';
import { View, Button, Block } from '@tarojs/components';
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
              <View>UI还在开发中...</View>
              <View>
                参与或者关注进度请点击下面按钮
              </View>
            </View>
            <Button open-type="getUserInfo" onGetUserInfo={this.handleGetUserInfo.bind(this)}>关注进度</Button>
          </View>
        }
      </Block>
    )
  }
}