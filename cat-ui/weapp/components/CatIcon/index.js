import Taro, { Component } from '@tarojs/taro';
import PropTypes from 'prop-types';
import { View } from '@tarojs/components';
import './index.less';

export default class CatIcon extends Component {
  static options = {
    addGlobalClass: true,
  }
  handleClick(e) {
    this.props.onClickEvent(e);
  }
  render() {
    let { type, className } = this.props;
    if (type) {
      type = type.indexOf('icon') > -1 ? type: 'icon-' + type;
    }
    return (
      <View className={`iconfont ${type} ${className}`} onClick={this.handleClick}></View>
    )
  }
}

CatIcon.propTypes = {
  type: PropTypes.string
}