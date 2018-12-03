import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import './index.less';
import { CatGrid, CatPanel } from '../../index.js';

export default class Grids extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    const logo = require('../../images/logo.jpg');
    const data = [
      {
        image: '/images/logo.jpg',
        title: '音乐1',
        path: '/pages/index/index'
      },
      {
        image: '/images/logo.jpg',
        title: '舞蹈1',
        path: '/pages/index/index'
      },
      {
        image: '/images/logo.jpg',
        title: '戏剧1',
        path: '/pages/index/index'
      },
      {
        image: '/images/logo.jpg',
        title: '亲子1',
        path:'/pages/index/index'
      },
      {
        image: '/images/logo.jpg',
        title: '音乐2',
        path: '/pages/index/index'
      },
      {
        image: '/images/logo.jpg',
        title: '舞蹈2',
        path: '/pages/index/index'
      },
      {
        image: '/images/logo.jpg',
        title: '戏剧2',
        path: '/pages/index/index'
      },
      {
        // image: '/images/logo.jpg',
        fontIcon: 'search',
        title: '亲子2',
        path:'/pages/index/index'
      }
    ];
    this.setState({
      data: data
    });
  }
  render() {
    const { data } = this.state;
    return (
      <View className="page-container">
        <View class="title">Grid 组件</View>
        <CatPanel
          title="默认Grid"
          isNoBorder
        >
          <CatGrid
            data={data}
          />
        </CatPanel>
        <CatPanel
          title="带边框Grid"
          isNoBorder
        >
          <CatGrid
            hasBorder
            data={data}
          /> 
        </CatPanel>
        <CatPanel
          title="横行Grid"
          isNoBorder
        >
          <CatGrid
            mode="rect"
            hasBorder
            data={data}
          /> 
        </CatPanel>
      </View>
    );
  }
}