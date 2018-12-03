import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import './index.less';
import { CatRow, CatCol, CatIcon } from '../../index.js';

export default class Icons extends Component {
  render() {
    return (
      <View>
        <View className="title">图标集</View>
        <CatRow>
          <CatCol span="4" className="flex flex-column justify-center align-center">
            <CatIcon type="search" className="icon" />
            <View className="icon-label">search</View>
          </CatCol>

          <CatCol
            span="4"
            className="flex flex-column justify-center align-center"
          >
            <CatIcon
              type="paint"
            />
            <View className="icon-label">paint</View>
          </CatCol>
          
          <CatCol
            span="4"
            className="flex flex-column justify-center align-center"
          >
            <CatIcon type="right" className="icon" />
            <View className="icon-label">right</View>
          </CatCol>
          
          <CatCol
            span="4"
            className="flex flex-column justify-center align-center"
          >
            <CatIcon type="add" className="icon" />
            <View className="icon-label">add</View>
          </CatCol>

          <CatCol
            span="4"
            className="flex flex-column justify-center align-center"
          >
            <CatIcon type="album" className="icon" />
            <View className="icon-label">album</View>
          </CatCol>

          <CatCol
            span="4"
            className="flex flex-column justify-center align-center"
          >
            <CatIcon type="camera" className="icon" />
            <View className="icon-label">camera</View>
          </CatCol>

        </CatRow>
      </View>
    )
  }
}