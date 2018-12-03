import Taro, { Component } from '@tarojs/taro'
import Guide from './pages/guide/index'
import '@tarojs/async-await'
import './app.less'
import './API/db.js';
class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/examples/rates',
      'pages/examples/avatars',
      'pages/guide/index',
      'pages/examples/buttons',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    // "tabBar": {
    //   "color": "#999999",
    //   "selectedColor": "#1cbbb4",
    //   "backgroundColor": "#ffffff",
    //   "borderStyle": "black",
    //   "list": [{
    //     "pagePath": "pages/index/index",
    //     "text": "UI列表"
    //   },
    //   {
    //     "pagePath": "pages/index/index",
    //     "text": "关于我"
    //   }]
    // }
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
