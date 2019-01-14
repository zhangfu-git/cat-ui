import Taro from '@tarojs/taro-h5';
import { Component } from "@tarojs/taro-h5";
import Nerv from "nervjs";
import { View } from '@tarojs/components';
import CatIcon from '../CatIcon';
import './index.less';

export default class CatPanel extends Component {
  static defaultProps = {
    hasBorder: true,
    hasBackground: true,
    hasPadding: true,
    linkType: 'navigateTo'
  };
  static options = {
    addGlobalClass: true
  };
  handleClickLink() {
    this.props.onClickLink();
  }
  render() {
    const { title, isLink, linkDesc, titleClass, hasBorder, hasBackground, hasPadding, src, className, bodyClass } = this.props;
    const noBorderCls = hasBorder ? '' : 'no-border';
    const noBackgroundCls = hasBackground ? '' : 'no-background';
    const noPaddingCls = hasPadding ? '' : 'no-padding';
    return <View className={`cat-panel ${className} ${noBackgroundCls} ${noBorderCls} ${noPaddingCls}`}>
        <View className={"cat-panel_header"}>
          {title && <View className={`cat-panel-title ${titleClass}`}>{title}</View>}
          {isLink && <View className="cat-panel-link" onClick={this.handleClickLink}>
              {linkDesc && <View className="cat-panel-link-desc">{linkDesc}</View>}
              <CatIcon type="icon-right" />
            </View>}
        </View>
        <View className={`cat-panel_body ${bodyClass}`}>
          {this.props.children}
        </View>
      </View>;
  }
}