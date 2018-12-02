import Taro, { Component } from '@tarojs/taro';
import { Button, Form } from '@tarojs/components';
import './index.less';

export default class CatFormButton extends Component {
  handleSubmit(e) {
    this.props.onGetFormId(e);
  }
  render() {
    const { type, size, block, shape } = this.props;
    const sizeCls = size ? `cat-formBtn__size-${size}` : '';
    const typeCls = type ? `cat-formBtn__type-${type}`: '';
    const isBlockCls = block ? `cat-formBtn__is-block}`: '';
    const formClassNames = `cat-formBtn ${sizeCls} ${typeCls} ${isBlockCls} cat-formBtn__${shape}`;
    return (
      <Form reportSubmit className={formClassNames} onSubmit={this.handleSubmit}>
        <Button formType="submit" class="cat-formBtn__main">{this.props.children}</Button>
      </Form>
    )
  }
}