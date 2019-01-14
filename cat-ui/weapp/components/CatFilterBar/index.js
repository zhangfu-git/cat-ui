import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import './index.less';
import CatIcon from '../CatIcon';

export default class CatFilterBar extends Component {
  static defaultProp = {
    data: []
  }
  onClick(item, index) {
    this.props.onChange(item, index);
  }
  render() {
    const { data, isFixed } = this.props;
    const cls = `cat-filter-bar ${isFixed ? 'fixed': ''}`;
    return (
      <View className={cls}>
        {
          data && data.map((item, index) => {
            return (
              <View
                key={index}
                data-key={item}
                className={`filter-key ${item.isActive ? 'active': ''}`}
                onClick={this.onClick.bind(this, item, index)}
              >
                <View className="label">{item.title}</View>
                <View className="icon-box">
                  <CatIcon type="unfold" className='icon' />
                </View>
              </View>
            )
          })
        }
      </View>
    )
  }
}