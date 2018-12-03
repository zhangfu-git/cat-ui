import Taro from '@tarojs/taro-h5';
import { Component } from "@tarojs/taro-h5";
import Nerv from "nervjs";
import { View } from '@tarojs/components';
import './index.less';

export default class CatRow extends Component {
  static options = {
    addGlobalClass: true
  };
  render() {
    const catRowCls = 'cat-row';
    return <View className={catRowCls}>
        {this.props.children} 
      </View>;
  }
}