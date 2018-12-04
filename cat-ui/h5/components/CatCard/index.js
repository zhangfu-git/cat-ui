import Taro from '@tarojs/taro-h5';
import { Component } from "@tarojs/taro-h5";
import Nerv from "nervjs";
import { View, Image } from '@tarojs/components';
import './index.less';

export default class CatCard extends Component {
  static options = {
    addGlobalClass: true
  };
  static defaultProps = {
    src: '',
    imagePosition: 'right',
    shape: 'rect-w'
  };
  render() {
    const { src, imagePosition, shape, imgBoxClass, imgClass } = this.props;
    const catCardCls = `cat-card cat-card__img-${imagePosition} cat-card__img-${shape}`;
    return <View className={catCardCls}>
        <View className="cat-card__main">
          <View className="cat-card__info-header">
            {this.props.renderInfoHeader}
          </View>
          <View className="cat-card__info-footer">
            {this.props.renderInfoFooter}
          </View>
        </View>
        <View className={`cat-card__img-box ${imgBoxClass}`}>
          <Image mode="scaleToFill" src={src} className={`cat-card-img ${imgClass}`}></Image>
        </View>        
      </View>;
  }
}