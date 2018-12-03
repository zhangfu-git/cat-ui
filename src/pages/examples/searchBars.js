import Taro, { Component } from '@tarojs/taro';
import { View, Swiper, SwiperItem } from '@tarojs/components';
import { CatSearchBar, CatPanel  } from '../../index.js';
import './index.less';

export default class SearchBars extends Component {
  render() {
    return (
      <View className="page-container">
        <View className="title">搜索组件示例</View>
        <CatPanel
          title="链接型"
          className="bg"
          isNoBorder
        >
          <CatSearchBar
            isLink
          />
          <CatSearchBar
            isLink
            isOnlyIcon
          />
        </CatPanel>
        <CatPanel
          title="普通型"
          isNoBorder
        >
          <CatSearchBar
            
          />
        </CatPanel>
      </View>
    )
  }
}