import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import CatIcon from '../CatIcon';
import './index.less';

export default class CatList extends Component {
  handleClick(e) {
    const { isOnlyClickFooter, src } = this.props;
    const postion = e.currentTarget.dataset.position;
    if (!src) return;
    if (isOnlyClickFooter) {
      if (postion === 'footer') {
        Taro.navigateTo({
          url: src
        });
      }
    } else {
      Taro.navigateTo({
        url: src
      });
    }
  }
  render() {
    const { isLink, title, label } = this.props;
    return (
      <View className="cat-list" data-position="all" onClick={this.handleClick}>
        <View className="cat-list_icon">
          {this.props.renderIcon}
        </View>
        <View className="cat-list_body">
          {
            title && <View className="cat-list-title">{title}</View>
          }
          {
            label && <View className="cat-list-desc">{label}</View>
          }
          {
            this.props.renderBody
          }
        </View>
        <View class="cat-list_footer" data-position="footer">
          { this.props.renderFooter }
          {
            isLink &&
            <View class="cat-list_right__arrow-icon">
              <CatIcon type="icon-right" />
            </View>
          }
        </View>
      </View>
    )
  }
}