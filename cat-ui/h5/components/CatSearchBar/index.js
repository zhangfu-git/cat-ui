import Taro from '@tarojs/taro-h5';
import { Component } from "@tarojs/taro-h5";
import Nerv from "nervjs";
import { View, Input, Button } from '@tarojs/components';
import { CatIcon } from '../CatIcon';
import './index.less';

export default class CatSearchBar extends Component {
  constructor() {
    super();
    this.state = {
      value: ''
    };
  }
  clickSearchBox() {
    const { isOnlyIcon } = this.props;
    if (isOnlyIcon) return;
    this.navigateTo();
  }
  navigateTo() {
    const { path, isLink } = this.props;
    console.log('跳转链接', path);
    if (isLink && path) {
      Taro.navigateTo({
        url: path
      });
    }
  }
  handleClickIcon() {
    const { isOnlyIcon } = this.props;
    if (isOnlyIcon) {
      this.navigateTo();
    }
  }
  onInput(e) {
    const value = e.detail.value;
    this.setState({
      value: value
    });
  }
  onSubmit() {
    const { value } = this.state;
    console.log('点击了搜索按钮', value);
    this.props.onChange(value);
  }
  onEmpty() {
    this.setState({
      value: ''
    });
  }
  render() {
    let { isLink, placeholder, isOnlyIcon } = this.props;
    placeholder = placeholder || '搜索';
    const catSearchBarCls = `cat-search-bar is-only__icon-${isOnlyIcon ? 'on' : 'off'}`;
    return <View className={catSearchBarCls}>
        {isLink ? <View className="cat-search__icon-box" onClick={this.clickSearchBox}>
            <CatIcon type="icon-search" onClickEvent={this.handleClickIcon} />
            <View className="cat-search-placeholder">{placeholder}</View>
          </View> : <View className="cat-search__input-container">
            <View className="cat-search__input-box">
              <CatIcon type="icon-search" />
              <Input onInput={this.onInput} value={this.state.value} className="cat-search_input" placeholder={placeholder} />
              {this.state.value && <CatIcon onClickEvent={this.onEmpty} type="icon-close" />}
            </View>
            <Button className={`cat-search-btn ${this.state.value ? 'theme-bg' : ''}`} onClick={this.onSubmit}>
              搜索
            </Button>
          </View>}
      </View>;
  }
}