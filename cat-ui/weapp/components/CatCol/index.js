import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import './index.less';

export default class CatCol extends Component {
  static options = {
    addGlobalClass: true,
  }
  render() {
    const { span, offset, className } = this.props;
    const colCls = `cat-col cat-col-${span || 1} cat-col-offset-${offset || '0'} ${className}`
    return (
      <View className={colCls}>
        {this.props.children}
      </View>
    )
  }
}