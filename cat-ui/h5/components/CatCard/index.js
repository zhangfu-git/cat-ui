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
  onClick() {
    const { path } = this.props;
    if (path) {
      Taro.navigateTo({
        url: path
      });
    }
    this.props.onClick();
  }
  render() {
    let { src, imagePosition, shape, imgBoxClass, imgClass, multiImage, imgBoxStyle } = this.props;
    const catCardCls = `cat-card cat-card__img-${imagePosition} cat-card__img-${shape}`;
    const isArrayFromSrc = Array.isArray(src);
    if (isArrayFromSrc) {
      multiImage = true;
    } else {
      multiImage = false;
    }
    return <View className="cat-card__contaienr" onClick={this.onClick}>
        <View className={catCardCls}>
          <View className="cat-card__main">
            <View className="cat-card__info-header">
              {this.props.renderContent}
            </View>
          </View>
          <View className={`cat-card__img-box ${imgBoxClass}`} style={imgBoxStyle}>
            {multiImage ? <View className="array-image__container">
                {src.map((item, index) => {
              return index <= 2 && <Image key={item} mode="aspectFill" src={item} className="array-image"></Image>;
            })}
              </View> : <Image mode="aspectFill" src={src} className={`cat-card-img ${imgClass}`}></Image>}
          </View>
        </View>
        <View className="cat-card__footer">
          {imagePosition === 'bottom' && this.props.renderFooter}
        </View>
      </View>;
  }
}