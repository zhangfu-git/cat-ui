import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import './index.less';

export default class CatIcon extends Component {
  static options = {
    addGlobalClass: true,
  }
  render() {
    const { type, className } = this.props;
    return (
      <View className={`iconfont ${type} ${className}`}></View>
    )
  }
}