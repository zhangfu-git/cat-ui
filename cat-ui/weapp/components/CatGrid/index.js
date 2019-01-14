import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { isNumber } from '../common/index.js';
import CatIcon from '../CatIcon';
import './index.less';

export default class CatGrid extends Component {
  static defaultProps = {
    data: [],
    columnNum: 4,
    mode: 'square',
    hasBorder: false
  }
  clickGrid(item, parentIndex, _index) {
    const { columnNum, isLink } = this.props;
    
    if (isLink && item[_index].src) {
      Taro.navigateTo({
        url: item[_index].src
      });
      return;
    }
    
    let currIndex = _index;
    if (parentIndex > 0) {
      currIndex = columnNum * parentIndex + _index;
    }
    this.props.onClick(item, currIndex);
  }
  render() {
    let { data, columnNum, mode, hasBorder } = this.props;
    if (!isNumber(columnNum)) throw 'xCount not number';
    const dataLen = data.length;
    columnNum = parseInt(columnNum, 10);
    let gridList = [];
    for (let i = 0; i < dataLen; i = i + columnNum) {
      let groupList = [];
      for (let j = 0; j < columnNum; j++) {
        groupList.push(
          data[j+i]
        );
      }
      gridList.push(groupList);
    }

    const catGridCls = `cat-grid ${hasBorder ? 'cat-grid__has-border': ''} cat-grid__mode-${mode}`;

    const cellList = gridList.map((item, index) => {
      return (
        <View className="cat-grid__group" key={index}>
          {
            item.map((i, _index) => {
              return (
                <View className={catGridCls} key={i.title} onClick={this.clickGrid.bind(this, item, index, _index)}>
                  <View className="cat-grid-image-box">
                    {
                      i.image ?
                        <Image className="cat-grid-image" mode="scaleToFill" src={i.image}></Image>
                      : (
                        i.fontIcon &&
                        <CatIcon type={i.fontIcon} />
                      )
                    }
                  </View>
                  <View className='cat-grid-title'>{i.title}</View>
                </View>                
              )
            })
          }
        </View>
      )
    })
    return (
      <View>
        {
          cellList
        }
      </View>
    );
  }
}