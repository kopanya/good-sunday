# vue-module-css
文章主要介绍在webpack打包工具下，模块化开发CSS在Vue的实践。Vue自身提供了module-css的属性，我做过一个简单的实验，打包后css的样式会附属到组件里面，导致css和js没法分离,结果不是我想要的。所以下面介绍内容分离Vue自身的框架，达成的效果目前还是比较满意。

## 前提
在实践前, 大家要提前要掌握主要的技术点。
1. css-module面向对象开发的css的思想和书写格式，具体可参考css-loader官方文档
2. bem编程思想，可以合理的安排css的书写规范
3. less，sass的基本写法。
## npm安装
```base
$ npm i less-loader css-loader style-loade -D
```

## webpack配置
```js
module: {
  rules: [
    {
      test: /\.less$/,
      use: ExtractTextPlugin.extract({
          use: [
              {
                  loader: 'css-loader',
                  options: {
                      camelCase: true,
                      importLoaders: 1,
                      localIdentName: '[local]_[hash:base64:8]',
                      minimize: true, 
                      modules: true  // 开启module参数
                  }
              },
              'less-loader'
          ],
          fallback: 'style-loader'
      })
    }
  ]
}
```
## 业务代码示例
```less
//---- layout.less
/**
 * 显示页面框架样式
 * 参考 /template/b2c
 **/
.prl-main-box{
    background: #fff;
    border: 1px solid #e5e5e5;
    border-radius: 5px;
    padding: 20px 0;
}
/**
 *  显示页面头部样式 
 *  参考 /template/b2c
 **/
.prl-main-header{
    margin-bottom: 20px;
}
.prl-main-cont{
    padding: 0 20px;
}
```
```vue
//----- Xxxxxx.vue
<template>
  <div :class="[b2cStyle.b2cBox, prillStyle.prlMainBox]">
    <div :class="[prillStyle.prlMainHeader, prillStyle.prlTitleBox]">
      <span :class="[prillStyle.prlTitleTxt]">B2C模板</span>
    </div>
    <div :class="[prillStyle.prlMainCont]">
      <div class="[b2cStyle.b2cMainCont]">
      </div>
    </div>
  </div>
</template>

<script>
import b2cStyle from "./b2c.less";
import prillStyle from "../../../styles/prill.less";
...
...

export default {
  name: "b2c",
  ...
  ...
  created() {
    this.b2cStyle = b2cStyle;
    this.prillStyle = prillStyle;
  }
  ...
  ...
};
</script>

```
