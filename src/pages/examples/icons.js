import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import './index.less';
import { CatRow, CatCol, CatIcon, CatGrid } from '../../index.js';

export default class Icons extends Component {
  config = {
    navigationBarTitleText: 'CatIcon组件'
  }
  render() {
    const data = [
      {
        fontIcon: 'search',
        title: 'search'
      },
      {
        fontIcon: 'sort',
        title: 'sort'
      },
      {
        fontIcon: 'activityfill',
        title: 'activityfill'
      },
      {
        fontIcon: 'add',
        title: 'add'
      },
      {
        fontIcon: 'album',
        title: 'album'
      },
      {
        fontIcon: 'appreciate',
        title: 'appreciate'
      },
      {
        fontIcon: 'appreciatefill',
        title: 'appreciatefill'
      },
      {
        fontIcon: 'apps',
        title: 'apps'
      },
      {
        fontIcon: 'attention',
        title: 'attention'
      },
      {
        fontIcon: 'attentionfill',
        title: 'attentionfill'
      },
      {
        fontIcon: 'attentionforbid',
        title: 'attentionforbid'
      },
      {
        fontIcon: 'attentionforbidfill',
        title: 'attentionforbidfill'
      },
      {
        fontIcon: 'back',
        title: 'back'
      },
      {
        fontIcon: 'right',
        titl: 'right'
      },
      {
        fontIcon: 'check',
        title: 'check'
      },
      {
        fontIcon: 'close',
        title: 'close'
      },
      {
        fontIcon: 'delete',
        title: 'delete'
      },
      {
        fontIcon: 'home',
        title: 'home'
      },
      {
        fontIcon: 'homefill',
        title: 'homefill'
      },
      {
        fontIcon: 'like',
        title: 'like'
      },
      {
        fontIcon: 'likefill',
        title: 'likefill'
      },
      {
        fontIcon: 'location',
        title: 'location'
      },
      {
        fontIcon: 'locationfill',
        title: 'locationfill'
      },
      {
        fontIcon: 'mark',
        title: 'mark'
      },
      {
        fontIcon: 'markfill',
        title: 'markfill'
      },
      {
        fontIcon: 'message',
        title: 'message'
      },
      {
        fontIcon: 'messagefill',
        title: 'messagefill'
      },
      {
        fontIcon: 'mobile',
        title: 'mobile'
      },
      {
        fontIcon: 'mobilefill',
        title: 'mobilefill'
      },
      {
        fontIcon: 'people',
        title: 'people'
      },
      {
        fontIcon: 'peoplefill',
        title: 'peoplefill'
      },
      {
        fontIcon: 'pic',
        title: 'pic'
      },
      {
        fontIcon: 'picfill',
        title: 'picfill'
      },
      {
        fontIcon: 'favor',
        title: 'favor'
      },
      {
        fontIcon: 'favorfill',
        title: 'favorfill'
      },
      {
        fontIcon: 'service',
        title: 'service'
      },
      {
        fontIcon: 'servicefill',
        title: 'servicefill'
      },
      {
        fontIcon: 'settings',
        title: 'settings'
      },
      {
        fontIcon: 'sponsor',
        title: 'sponsor'
      },
      {
        fontIcon: 'sponsorfill',
        title: 'sponsor'
      },
      {
        fontIcon: 'write',
        title: 'write'
      },
      {
        fontIcon: 'writefill',
        title: 'writefill'
      },
      {
        fontIcon: 'scan',
        title: 'scan'
      },
      {
        fontIcon: 'roundadd',
        title: 'roundadd'
      },
      {
        fontIcon: 'roundaddfill',
        title: 'roundaddfill'
      },
      {
        fontIcon: 'roundclose',
        title: 'roundclose'
      },
      {
        fontIcon: 'roundclosefill',
        title: 'roundclosefill'
      },
      {
        fontIcon: 'share',
        title: 'share'
      }
    ]
    return (
      <View>
        <View className="title">图标集</View>
        <CatGrid
          columnNum = "3"
          hasBorder
          data={data}
        >

        </CatGrid>
      </View>
    )
  }
}