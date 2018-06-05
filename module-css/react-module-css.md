# react-module-css
文章主要介绍在webpack打包工具下，模块化开发CSS在React的实践。

## 前提
在实践前, 大家要提前要掌握主要的技术点。
1. css-module面向对象开发的css的思想和书写格式，具体可参考css-loader官方文档
2. bem编程思想，可以合理的安排css的书写规范
3. less，sass的基本写法。

## npm安装
```base
$ npm i babel-plugin-react-css-modules postcss-loader node-sass css-loader style-loader resolve-url-loader -D
```

## webpack配置
```js
module: {
  rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: {
          plugins: [
            [
              'react-css-modules',
              {
                context: helpers.root('src'),
                filetypes: {
                  '.scss': {
                    syntax: 'postcss-scss'
                  }
                },
                generateScopedName
              }
            ]
          ]
        }
      }]
    },
    {
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            camelCase: true,
            getLocalIdent: (context, localIdentName, localName) => {
              return generateScopedName(localName, context.resourcePath);
            },
            importLoaders: 1,
            minimize: true,
            modules: true
          }
        },
        'resolve-url-loader',
        'sass-loader',
      ]
    }
  ]
}
```
## 业务代码示例
```css
//---- layout.scss
.layout-fixed{
  opacity: 1;
}
.layout-fixed-header{
  position: fixed;
  font-size: 0.36rem;
  text-align: center;
  padding: 0.3rem 0 0.26rem;
  background: #fff;
  line-height: 0.36rem;
  left: 0;
  right: 0;
  top: 0;
  border-bottom: 0.005rem solid #E5E5E5;
  z-index: 9;
}
.layout-fixed-footer{
  position: fixed;
  height: 0.96rem;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
}

.layout-fixed-main{
  width: 100%;
  /* main绝对定位，进行内部滚动 */
  position: absolute;
  top: 0;
  bottom: 0.96rem;
  /* 使之可以滚动 */
  overflow-y: scroll;
  /* 增加该属性，可以增加弹性 */
  -webkit-overflow-scrolling: touch;
  z-index: 8;
}
```
```js
//----- Xxxxxx.js
import React from 'react';
import style_layout from '../../../scss/layout.scss';
....
....
export class Xxxxxx extends React.Component {
  ...
  ...
  render() {
    return (
        <div styleName="style_layout.layout-fixed">
          <div styleName="style_layout.layout-fixed-main">
            ....
            ....
          </div>
          <div styleName="style_layout.layout-fixed-footer">
            ....
            ....
          </div>
        </div>
    );
  }
}

```

## 说明
 1. [generateScopedName方法](createUniqueIdGenerator.js)