import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { CatPanel, CatAvatar } from '../../index.js';
import './index.less';

export default class Avatars extends Component {
  config = {
    navigationBarTitleText: 'CatAvatar 头像组件'
  }
  constructor() {
    super();
    this.state = {
      avatarUrl: ''
    }
  }
  componentDidMount() {
    const userInfo = Taro.getStorageSync('WX_USER_INFO');
    let avatarUrl = '';
    if (userInfo) {
      avatarUrl = userInfo.avatarUrl;
    } else {
      avatarUrl = require('../../images/logo.jpg');
    }
    this.setState({
      avatarUrl: avatarUrl
    })
  }
  render() {
    return (
      <View className="page-container">
        <View className="title">头像Demo</View>
        <CatPanel
          title="默认形状头像(文字)"
          bodyClass="flex-cm"
        >
          <CatAvatar size="small">张</CatAvatar>
          <CatAvatar>Hi</CatAvatar>
          <CatAvatar size="large">张先生</CatAvatar>
        </CatPanel>
        <CatPanel
          title="circle形状"
          bodyClass="flex-cm"
        >
          <CatAvatar
            size="small"
            shape="circle"
          >
            张
          </CatAvatar>
          <CatAvatar
            shape="circle"
          >
            张
          </CatAvatar>
          <CatAvatar
            size="large"
            shape="circle"
          >
            张
          </CatAvatar>                    
        </CatPanel>
        <CatPanel
          title="图片模式"
          bodyClass="flex-cm"
        >
          <CatAvatar
            src={this.avatarUrl}
          />
          <CatAvatar
            src={this.avatarUrl}
          />          
          <CatAvatar
            size="large"
            shape="circle"
            src={this.avatarUrl}
          />   
        </CatPanel>
      </View>
    );
  }
}