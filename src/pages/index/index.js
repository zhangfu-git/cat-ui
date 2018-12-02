import Taro, { Component } from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem, Image, ScrollView } from '@tarojs/components'
import StandarLogin from '../../components/StandarLogin';
import { CatList, CatIcon } from '../../index.js'
import './index.less';

export default class Index extends Component {

  config = {
    navigationBarTitleText: 'UI 列表'
  }

  constructor() {
    super(...arguments)
    this.state = {
      isShowLogin: false,
      isLogin: false
    }
  }
  componentWillMount () { }

  async componentDidMount () {
    const openId = wx.getStorageSync('openId');
    if (!openId) {
      this.showLoginBtn();
    } else {
      this.setState({
        isLogin: true
      })
    }
  }

  componentWillUnmount () {

  }

  componentDidShow () { }

  componentDidHide () { }
  showLoginBtn() {
    this.setState({
      isShowLogin: true
    })
  }
  hideStandarLogin(user) {
    this.login(user);
    this.setState({
      isShowLogin: false
    })
  }

  login(userInfo) {
    wx.cloud.callFunction({
      name: 'login',
      data: {
        ...userInfo
      }
    })
    .then((res) => {
      wx.setStorage({
        key: 'openId',
        data: res.result
      });
      this.setState({
        isLogin: true
      })
    })
    .catch((err) => {
      console.log(err, '失败')
    })
  }

  render () {
    return (
      <View className='index'>
        <StandarLogin
          isShow={this.state.isShowLogin}
          onHide={this.hideStandarLogin}
        />
        <CatList
          isLink
          src="/pages/examples/buttons"
          title="Button 组件"
          // label="按钮UI"
          renderIcon= {
            <CatIcon type="icon-cascades" className="mr10" />
          }
          renderFooter={
            <Text>详细</Text>
          }
        />
        <CatList
          isLink
          src="/pages/examples/avatars"
          title="Avatar 组件"
          renderIcon={
            <CatIcon type="icon-camera" className="mr10"></CatIcon>
          }
        />
        {
          this.state.isLogin ?
          <View class="tips">
            暂时未开放
          </View>
          :
          <View class="tips">未登录无法查看</View>
        }
      </View>
    )
  }
}

