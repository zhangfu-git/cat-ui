import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { CatButton, CatCurtain } from '../../index.js';
import './index.less';

export default class Curtain extends Component {
  constructor() {
    super();
    this.state = {
      closeBtnPosition: 'top'
    }
  }
  openCurtain(pos) {
    this.setState({
      closeBtnPosition: pos
    });
    this.catCurtain.open();
  }
  refCatcurtain = (node) => this.catCurtain = node
  render() {
    return (
      <View>
        <View className="title">幕帘示例</View>
        <View className="text-center">
          <CatCurtain
            ref={this.refCatcurtain}
            closeBtnPosition={this.state.closeBtnPosition}
          />
          <CatButton
            onClick={this.openCurtain.bind(this, 'top')}
          >
            幕帘上关闭
          </CatButton>
          <CatButton
            type="primary"
            onClick={this.openCurtain.bind(this, 'bottom')}
          >
            幕帘下关闭
          </CatButton>
        </View>
      </View>
    );
  }
}