import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import './index.less';

export default class CatRow extends Component {
  static options = {
    addGlobalClass: true
  }
  render() {
    const catRowCls = 'cat-row';
    return (
      <View className={catRowCls}>
        {this.props.children} 
      </View>
    )
  }
}