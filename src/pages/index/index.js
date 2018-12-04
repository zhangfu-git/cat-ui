import Taro, { Component } from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem, Image, ScrollView } from '@tarojs/components'
import StandarLogin from '../../components/StandarLogin';
import { CatList, CatIcon, CatButton } from '../../index.js'
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
      // this.showLoginBtn();
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
  showLoginModule() {
    this.setState({
      isShowLogin: true
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
          title="Button组件"
          // label="按钮UI"
          renderIcon= {
            <CatIcon type="icon-cascades" className="mr10" />
          }
        />
        <CatList
          isLink
          src="/pages/examples/avatars"
          title="Avatar组件"
          renderIcon={
            <CatIcon type="icon-camera" className="mr10"></CatIcon>
          }
        />
        <CatList
          isLink
          src="/pages/examples/layout"
          title="栅格布局组件"
          renderIcon={
            <CatIcon
              type="paint"
              className="mr10"
            />
          }
        />
        <CatList
          isLink
          src="/pages/examples/searchBars"
          title="searBar组件"
          renderIcon={
            <CatIcon
              type="search"
              className="mr10"
            />
          }
        />
        <CatList
          isLink
          src="/pages/examples/icon"
          title="Icon组件"
          renderIcon={
            <CatIcon
              type="magic"
              className="mr10"
            />
          }
        />
        <CatList
          isLink
          src="/pages/examples/grids"
          title="Grid组件"
          renderIcon={
            <CatIcon
              type="apps"
              className="mr10"
            />
          }
        />
        <CatList
          // isLink
          title="List组件"
          renderIcon= {
            <CatIcon
              type="sort"
              className="mr10"
            />
          }
          renderFooter={
            <Text>当前就是List用例</Text>
          }
        />
        <CatList
          title="FormButton组件"
          src="/pages/examples/formButton"
          isLink
          renderIcon={
            <CatIcon
              type="medal"
              className="mr10"
            />
          }
        />
        <CatList
          isLink
          title="CatCurtain组件"
          src="/pages/examples/curtain"
          renderIcon={
            <CatIcon
              type="barcode"
              className="mr10"
            />
          }
        />
        <CatList
          isLink
          title="CatCard组件"
          src="/pages/examples/cardList"
          renderIcon={
            <CatIcon
              type="sort"
              className="mr10"
            />
          }
        />
        {
          this.state.isLogin ?
          <View class="tips">
            项目地址: https://github.com/zhangfu-git/cat-ui
          </View>
          :
          <View className="text-center">
            <View class="tips">未登录可能影响部分组件预览</View>
            <CatButton type="primary" onClick={this.showLoginModule}>点击登录</CatButton>
          </View>
        }
      </View>
    )
  }
}

