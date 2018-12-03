import Taro from '@tarojs/taro-h5';
import { Component } from "@tarojs/taro-h5";
/** Properties
 *  title               |   标题
 *  linkDesc            |   展示的描述
 *  titleStyle          |   自定义标题样式
 *  isNoBorder          |   不要边框
 *  isNoBackground      |   不要背景
 */

import Nerv from "nervjs";
import { View } from '@tarojs/components';
import CatIcon from '../CatIcon';
import './index.less';

export default class CatPanel extends Component {
  static options = {
    addGlobalClass: true
  };
  handleClickLink() {
    const { src } = this.props;
    if (src) {
      Taro.navigateTo(src);
    }
  }
  render() {
    const { title, isLink, linkDesc, titleClass, isNoBorder, isNoBackground, isNoPadding, src, className } = this.props;
    const noBorderCls = isNoBorder ? 'no-border' : '';
    const noBackgroundCls = isNoBackground ? 'no-background' : '';
    const noPaddingCls = isNoPadding ? 'no-padding' : '';
    return <View className="cat-panel">
        <View className="cat-panel_header">
          {title && <View className={`cat-panel-title ${titleClass}`}>{title}</View>}
          {isLink && <View className={`cat-panel-link ${src ? '' : 'text-line-through'}`} onClick={this.handleClickLink}>
              {linkDesc && <View className="cat-panel-link-desc">{linkDesc}</View>}
              <CatIcon type="icon-right" />
            </View>}
        </View>
        <View className={`cat-panel_body ${noBorderCls} ${noBackgroundCls} ${noPaddingCls} ${className}`}>
          {this.props.children}
        </View>
      </View>;
  }
}