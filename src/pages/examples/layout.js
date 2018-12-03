import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { CatRow, CatCol, CatPanel } from '../../index.js';
import '../../index.less';
import './index.less';

export default class Layout extends Component {
  render() {
    return (
      <View>
        <View className="title">布局</View>
        <CatPanel
          title="12等分栅格布局"
        >
          <CatRow>
            <CatCol span="1" className="col">
              1
            </CatCol>
            <CatCol span="2" className="col">
              2
            </CatCol>
            <CatCol span="3" className="col">
            3
            </CatCol>
            <CatCol span="4" className="col">
              4
            </CatCol>
            <CatCol span="2" className="col">
              2
            </CatCol>
          </CatRow>
        </CatPanel>
        <CatPanel
          title="分栏布局"
        >
          <CatRow>
            <CatCol
              span="6"
              offset="3"
              className="col"
            >
              6
            </CatCol>
            <CatCol
              span="3"
              className="col"
            >
              3
            </CatCol>
          </CatRow>
          <CatRow>
            <CatCol span="3" className="col">3</CatCol>
            <CatCol span="3" offset="6" className="col">3</CatCol>
          </CatRow>
        </CatPanel>
      </View>
    );
  }
} 