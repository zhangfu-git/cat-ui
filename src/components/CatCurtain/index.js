import Taro, { Component } from '@tarojs/taro';
import { View, Block } from '@tarojs/components';
import CatIcon from '../CatIcon/index.js';
import './index.less';

export default class CatCurtain extends Component {
  constructor() {
    super();
    this.state = {
      isOpened: false
    }
  }
  static defaultProps = {
    src: require('./logo.png'),
    closeBtnPosition: 'top'
  }
  open() {
    this.setState({
      isOpened: true
    });
  }
  hide() {
    this.setState({
      isOpened: false
    });
    this.props.onClose();
  }
  clickImage() {
    const { path } = this.props;
    if (path) {
      Taro.navigateTo({
        url: path
      });
    }
    this.props.onClickImage();
  }
  render() {
    const { src, closeBtnPosition } = this.props;
    const { isOpened } = this.state;
    const closeBtnCls = `cat-curtain__close-box close-btn__${closeBtnPosition}`;
    return (
      <Block>
        {
          isOpened &&
          <View className="cat-curtain">
            <View className="cat-curtain__container">
              <View className="cat-curtain__body">
                <View className={closeBtnCls} onClick={this.hide}>
                  <CatIcon className="cat-curtain__close-btn" type="roundclose" />
                </View>
                <View className="cat-curtain__img-box" onClick={this.clickImage}>
                  <Image mode="aspectFit" src={src} className="cat-curtain_img"></Image>
                </View>
              </View>
            </View>
          </View>
        }
      </Block>
    )
  }
}