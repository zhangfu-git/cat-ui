import Taro, { Component } from '@tarojs/taro';
import { Image, View } from '@tarojs/components';
import './index.less';

export default class CatAvatar extends Component {
  static options = {
    addGlobalClass: true,
  }
  render() {
    const { src, shape, size, className } = this.props;
    const catAvatarCls = `cat-avatar cat-avatar__${size} cat-avatar__${shape} ${className}`;
    return (
      <View className={catAvatarCls}>
        {
          src
          ?
          <Image src={src} className="cat-avatar__image"></Image>
          :
          <View className="cat-avatar__text">{this.props.children}</View>
        }
      </View>
    )
  }
}