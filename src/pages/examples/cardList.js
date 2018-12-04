import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import './index.less';
import { CatCard } from '../../index.js';
const imgRectW = require('../../images/rect-w.jpeg');
const imgRectH = require('../../images/rect-h.jpeg')
const imgSquare = require('../../images/square.jpeg');

export default class CardList extends Component {
  render() {
    const catList = [
      {
        title: 'CatCard示例1',
        content: `力拔山兮气盖世，时不利兮骓不逝。骓不逝兮可奈何？虞兮虞兮奈若何？`,
        src: imgRectW,
        shape: 'rect-w'
      },
      {
        title: 'CatCard示例2',
        content: `天之亡我，我何渡为！且籍与江东子弟八千人渡江而西，今无一人还，纵江东父兄怜而王我，我何面目见之？纵彼不言，籍独不愧于心乎？`,
        src: imgRectH,
        shape: 'rect-h'
      },
      {
        title: 'CatCard示例3',
        content: `力拔山兮气盖世，时不利兮骓不逝。骓不逝兮可奈何？虞兮虞兮奈若何？`,
        src: imgRectW,
        shape: 'rect-w',
        imagePosition: 'left'
      },
      {
        title: 'CatCard示例4',
        content: `力拔山兮气盖世，时不利兮骓不逝。骓不逝兮可奈何？虞兮虞兮奈若何？`,
        src: imgSquare,
        shape: 'square',
        imagePosition: 'left'
      },
      {
        title: 'CatCard示例5',
        content: '算了, 还是自己写一段文字吧！这是一个图片位置在上方的列子',
        src: imgSquare,
        shape: 'square',
        imagePosition: 'top',
        imgBoxClass: 'height400'
      },
      {
        title: 'CatCard示例6',
        content: '这是一个图片在下方的例子, 具体的item内容需要自己去控制是否超出',
        src: imgSquare,
        shape: 'square',
        imagePosition: 'bottom',
        imgBoxClass: 'height400'
      }
    ]
    return (
      <View className="page-container gray-bg">
        <View className="title">Card示例</View>
        {
          catList.map((item) => {
            return (
              <CatCard
                src={item.src}
                shape={item.shape}
                imagePosition={item.imagePosition}
                imgBoxClass={item.imgBoxClass}
                renderInfoHeader={
                  <View className="item-demo">
                    <View className="item-demo__title">
                      {item.title}
                    </View>
                    <View className="item-demo__content">
                      {item.content}
                    </View>
                  </View>
                }
                renderInfoFooter={
                  <View></View>
                }
              />
            );
          })
        }
      </View>
    );
  }
}