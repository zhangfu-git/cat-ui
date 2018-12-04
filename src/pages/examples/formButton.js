import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { CatFormButton } from '../../index.js';
import './index.less';

export default class FormButton extends Component {
  config = {
    navigationBarTitleText: 'CatFormButton组件'
  }
  constructor() {
    super();
    this.state = {
      formId: null,
    }
  }
  getFormId(e) {
    const formId = e.detail.formId;
    this.setState({
      formId: formId
    });
  }
  render() {
    return (
      <View>
        <View className="title">FormButton用来搜集formId</View>
        <View className="text-center">
          <CatFormButton
            type="theme"
            onGetFormId={this.getFormId}
          >
            获得formId
          </CatFormButton>
        </View>
        {
          this.state.formId &&
          <View>
            获取的FormId: {this.state.formId}
          </View>
        }
      </View>
    );
  }
}