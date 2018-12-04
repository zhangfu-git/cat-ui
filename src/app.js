import Taro, { Component } from '@tarojs/taro'
import Guide from './pages/guide/index'
import '@tarojs/async-await'
import './app.less'
import './API/db.js';
class App extends Component {

  config = {
    pages: [
      'pages/guide/index',
      'pages/examples/icons',
      'pages/index/index',
      'pages/examples/searchBars',
      'pages/examples/cardList',
      'pages/examples/curtain',
      'pages/examples/formButton',
      'pages/examples/grids',
      'pages/examples/layout',
      'pages/examples/rates',
      'pages/examples/avatars',
      'pages/examples/buttons',
    ],
    window: {
      backgroundColor: '#f1f1f1',
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }

  componentDidShow () {
  }

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Guide />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
