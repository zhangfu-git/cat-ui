import Taro from '@tarojs/taro-h5';
import { Component } from "@tarojs/taro-h5";
import Nerv from "nervjs";
import { Button } from '@tarojs/components';
import './index.less';

export default class CatButton extends Component {
  static options = {
    addGlobalClass: true
  };
  onClick() {
    if (this.props.disabled) return;
    this.props.onClick();
  }
  render() {
    const { type, size, block, className, shape, disabled } = this.props;
    const sizeCls = size ? `cat-btn__${size}` : '';
    const typeCls = type ? `cat-btn__${type}` : '';
    const isBlockCls = block ? 'cat-btn__is-block' : '';
    const disabledCls = disabled ? 'cat-btn__is-disabled' : '';
    const formClassNames = `cat-btn ${sizeCls} ${typeCls} ${isBlockCls} ${className} cat-btn__${shape} ${disabledCls}`;

    const {
      plain,
      loading,
      formType,
      openType,
      appParameter,
      hoverClass,
      hoverStopPropagation,
      hoverStartTime,
      hoverStayTime,
      onGetUserInfo,
      onGetPhoneNumber,
      lang
    } = this.props;
    return <Button className={formClassNames} plain={plain}
    // disabled={disabled}
    loading={loading} formType={formType} openType={openType} appParameter={appParameter} hoverClass={hoverClass} hoverStopPropagation={hoverStopPropagation} hoverStartTime={hoverStartTime} hoverStayTime={hoverStayTime} onGetUserInfo={onGetUserInfo} onGetPhoneNumber={onGetPhoneNumber} lang={lang} onClick={this.onClick}>
        {!loading && this.props.renderPrefix}
        {this.props.children}
        {this.props.renderSuffix}
      </Button>;
  }
}