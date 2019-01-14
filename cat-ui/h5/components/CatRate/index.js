import Taro from '@tarojs/taro-h5';
import { Component } from "@tarojs/taro-h5";
import Nerv from "nervjs";
import { View } from '@tarojs/components';
import './index.less';
import { isFunction, isNumber, fomatFloat } from "../common/index";

export default class CatRate extends Component {
  static options = {
    addGlobalClass: true
  };
  constructor() {
    super();
    this.state = {
      list: [],
      fraction: 0
    };
  }
  componentDidShow() {
    this.computedSart(this.props);
  }
  computedSart(props) {
    let { value, max, step } = props;
    let list = [];

    console.log('value:::', value);

    // max不是数值，则用户默认5
    if (!isNumber(max)) {
      max = 5;
    }
    let count = Math.abs(parseInt(max, 10));
    // 生成星星数组
    for (let i = 0; i < count; i++) {
      list.push({
        index: i,
        status: 0
      });
    }
    // step 代表一颗星的值(默认1:1)
    if (step && isNumber(step)) {
      value = fomatFloat(value / step, 1);
      console.log('计算小数', value);
    }

    // 计算得分
    if (value) {
      value = Math.abs(parseFloat(value));
      let intPart = parseInt(value, 10);
      if (intPart > count) intPart = count;
      const floatPart = value - intPart;
      // 改变整数部分的状态
      for (let i = 0; i < intPart; i++) {
        list[i].status = 1;
      }
      // 如果整数部分没有超出星列表, 则再下一个位置补上小数星
      if (intPart < list.length) {
        list[intPart].status = floatPart;
      }
    }
    this.setState({
      list: list,
      fraction: value
    });
  }
  componentWillReceiveProps(next, prev) {
    if (next) {
      next.value = next.value ? next.value : 0;
      this.computedSart(next);
    }
  }
  clickStar(item, index) {
    const { disabled } = this.props;
    if (disabled) return;
    const { list } = this.state;
    let newList = [];
    list.forEach((item, _index) => {
      if (_index <= index) {
        item.status = 1;
      } else {
        item.status = 0;
      }
      newList.push(item);
    });
    const fraction = index + 1;
    this.setState({
      list: newList,
      fraction: fraction
    });
    if (isFunction(this.props.onChange)) {
      this.props.onChange(fraction);
    }
  }
  render() {
    const { size, className, showDesc, desc, descPosition, descClass } = this.props;
    const { list } = this.state;
    const sizeCls = `cat-rate__${size} ${className}`;
    const starList = list.map((item, index) => {
      return <View key={item.index} className="cat-rate__icon" onClick={this.clickStar.bind(this, item, index)}>
          <View class={`iconfont icon-favor cat-rate__dark ${sizeCls}`}></View>
          <View className={`iconfont icon-favorfill cat-rate__light ${sizeCls}`} style={`width:${item.status * 100}%`}>
          </View>
        </View>;
    });
    let currDesc = '';
    if (desc) {
      currDesc = desc;
    } else {
      let fraction = +this.state.fraction;
      if (fraction === fraction) {
        if (fraction < 3) {
          currDesc = '差';
        } else if (fraction >= 3 && fraction < 4) {
          currDesc = '一般';
        } else if (fraction >= 4 && fraction < 5) {
          currDesc = '好';
        } else {
          currDesc = '非常好';
        }
      }
    }
    const pos = descPosition ? descPosition : 'right';
    return <View className="cat-rate">
        {pos === 'left' && showDesc && <View className={`cat-rate__desc cat-rate__desc-left ${descClass}`}>{currDesc}</View>}
        {starList}
        {pos === 'right' && showDesc && <View className={`cat-rate__desc ${descClass}`}>{currDesc}</View>}
      </View>;
  }
}