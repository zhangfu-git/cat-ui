import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import './index.less';
import { CatPanel, CatRate } from '../../index.js';

export default class Rates extends Component {
  config = {
    navigationBarTitleText: 'CatRate 评分组件'
  }
  onChange(e) {
    console.log('修改了自定义星', e)
  }
  render() {
    return (
      <View className="page-container">
        <View class="title">评分组件</View>
        <CatPanel
          title="普通用例"
          isNoBorder
        >
          <CatRate size="small"
            value="5"
            showDesc
          />
          <CatRate value="3" />
          <CatRate size="large" value="5" />
        </CatPanel>
        <CatPanel
          isNoBorder
          title="只读"
        >
          <CatRate
            disabled
            value="3.5"
          />
          <CatRate
            disabled
            value="5"
            showDesc
          />
          <CatRate
            disabled
            value="4"
            showDesc
            desc="自定义描述"
          />
        </CatPanel>
        <CatPanel
          isNoBorder
          title="自定义星数量"
        >
          <CatRate
            max="10"
            value="6"
            onChange={this.onChange}
          />
        </CatPanel>
        <CatPanel
          title="特殊用法"
          isNoBorder
        >
          <CatRate
            descPosition="left"
            showDesc
            // desc="左边描述"
          />
          <CatRate
            showDesc
            step="2"
            value="7.8"
            desc="自定义step"
          />
        </CatPanel>    
      </View>
    )
  }
}