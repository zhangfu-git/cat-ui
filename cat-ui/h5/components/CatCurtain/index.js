import Taro from '@tarojs/taro-h5';
import { Component } from "@tarojs/taro-h5";
import Nerv from "nervjs";
import { View, Block, Image } from '@tarojs/components';
import CatIcon from "../CatIcon/index";
import './index.less';

export default class CatCurtain extends Component {
  constructor() {
    super();
    this.state = {
      isOpened: false,
      isLoading: false
    };
  }
  static defaultProps = {
    src: require('./logo.png'),
    closeBtnPosition: 'top'
  };
  open() {
    this.setState({
      isOpened: true
    });
  }
  hide() {
    this.setState({
      isLoading: false
    }, () => {
      this.setState({
        isOpened: false
      });
      this.props.onClose();
      Taro.showTabBar();
    });
  }
  clickImage() {
    const { path } = this.props;
    this.props.onClickImage();
    this.setState({
      isLoading: false,
      isOpened: false
    }, () => {
      if (path) {
        Taro.navigateTo({
          url: path
        });
      }
    });
  }
  load() {
    this.setState({
      isLoading: true
    });
  }
  render() {
    const { src, closeBtnPosition } = this.props;
    const { isOpened, isLoading } = this.state;
    const closeBtnCls = `cat-curtain__close-box close-btn__${closeBtnPosition}`;
    const cls = `cat-curtain ${isLoading ? 'completed' : ''}`;
    const imageCls = `cat-curtain_img ${isLoading ? 'completed' : ''}`;
    return <Block>
        {isOpened && <View className={cls}>
            <View className="cat-curtain__container">
              <View className="cat-curtain__body">
                <View className={closeBtnCls} onClick={this.hide}>
                  <CatIcon className="cat-curtain__close-btn" type="roundclose" />
                </View>
                <View className="cat-curtain__img-box" onClick={this.clickImage}>
                  <Image onLoad={this.load} mode="widthFix" src={src} className={imageCls}></Image>
                </View>
              </View>
            </View>
          </View>}
      </Block>;
  }
}