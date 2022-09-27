## CSS概述
CSS是Cascading Style Sheets（层叠样式表）的缩写，是由李爵士的同事赖先生首先提出的。

### 层叠
1. 样式层叠
2. 选择器层叠
3. 文件层叠

这些特性使得CSS非常灵活，同时也会产生不少问题。

### CSS版本
主要有CSS 1、CSS 2、CSS 2.1、CSS 3这几个版本，目前使用最广泛的版本是CSS 2.1。

## CSS语法
### 样式语法

```
选择器 {
    属性名: 属性值;
    /* 注释 */
}
```

### @语法
```
@charset "UTF-8"
···
```

## 调试
* W3C验证器
* 各种编辑器看颜色看提示(VSCode、WebStorm)
* 浏览器开发者工具看提示
* **Border调试法（重要）**

    1. 怀疑某个元素有问题，就给这个元素加border
    2. 如果border没出现，则说明选择器或语法错误
    3. 如果border出现，要看边界是否符合预期
    4. 只有把bug解决了才能删除border

## 资料
* [MDN](https://developer.mozilla.org/zh-CN/)
* [CSS tricks](https://css-tricks.com/)
* [张鑫旭的博客](https://www.zhangxinxu.com/wordpress/category/css/)

## 文档流(normal flow)(重要)
### 什么是文档流
就是文档流动的方向

* inline元素从左到右，到达最右边才会换行，最后一个元素可能会断开
* block元素从上到下，每一个都另起一行
* inline-block元素也是从左到右，但会有一些block特征，最后一个元素不会断开

### 宽度
* inline元素的宽度为内部inline元素的和，不能用width指定
* block元素默认自动计算宽度，可以用width指定
* inline-block有二者的特点，可以用width指定宽度

### 高度
* inline元素的高度由line-height间接确定，与height无关
* block元素高度由内部文档流元素决定，可以设置height
* inline-block元素跟block类似可以设置height

### 溢出
* 内容的宽度或高度大于容器的宽度或高度会造成溢出
* 可以用```overflow```来设置是否显示滚动条

    * ```auto```是自动设置
    * ```scroll```是永远显示滚动条
    * ```hidden```是隐藏溢出部分
    * ```visible```是显示溢出的部分
    * ```overflow```可以分为```overflow-x```和```overflow-y```

### 脱离文档流
给元素设置```float```和```position:absolute / fixed```就能让元素脱离文档流

## 盒模型
从外到内分别是margin、border、padding和content
### content-box内容盒模型
* width = 内容宽度

### border-box边框盒模型 
* width = 内容宽度 + padding + border

## CSS布局
### float布局
1. 步骤

    1. 子元素上加上```float: left```和```with```
    2. 再父元素上加```.clearfix```
2. 注意
    * 这个布局是专门为IE准备的
    * IE 6/7有双倍margin bug，要么把margin减半，要么加上```display: inline-block```
    * 手机上不用float布局

### flex布局
1. flex container
    * 让一个元素变成flex container
    ```
    .container {
        display: flex;
    }
    ```
    * 改变items的流动方向
    ```
    .container {
        flex-direction: row | row-reverse | column | column-reverse;
    }
    ```
    * 改变折行
    ```
    .container {
        flex-wrap: nowrap | wrap | wrap-reverse;
    }
    ```
    * 主轴对齐方式
    ```
    .container {
        justify-content: flex-start | flex-end | center | ···
    }
    ```
    * 次轴对齐方式
    ```
    .container {
        align-items: flex-start | flex-end | ···
    }
    ```
    * 多行内容
    ```
    .container {
        align-content: ···
        /* 很少用到 */
    }
    ```
2. flex item
    * ```order```可以改变元素排序
    * ```flex-grow```控制元素如何“长胖”
    * ```flex-shrink```控制元素如何变瘦
    * ```flex-basis```控制基准宽度默认```auto```

3. 重点
    * ```display: flex```
    * ```flex-direction: row / column```
    * ```flex-wrap: wrap```
    * ```justify-content: center / space-between```
    * ```align-items: center```

4. 注意
    * 不要把width和height写死，一般写min-width这类
    * [flex布局小游戏](https://flexboxfroggy.com/#zh-cn)

### Grid布局
1. 成为container
    ```
    .container {
        display: grid | inline-grid;
    }
    ```
2. 行与列
    * 用线来分割布局，从左往右或从上往下的第一根线是1
    ```
    .container {
        grid-template-columns: 40px 50px auto 50px 40px;
        grid-template-rows: 25% 100px auto;
    }
    ```
3. 其他
    * grid属性很多，功能也很强大
    * [Grid布局小游戏](https://cssgridgarden.com/#zh-cn)

## CSS定位
**定位是垂直于屏幕的**
### 一个div的分层
从下往上分别是：background, border, 块级子元素，浮动元素，内联子元素。
### position属性
* ```static```默认值，待在文档流里面
* ```relative```相对定位，浮起来，但不脱离文档流
* ```absolute```决定定位，定位基准是祖先里非```static```的元素
* ```fixed```固定定位，基准是```viewport```（可能有bug）
* ```stick```粘滞定位，可以实现导航栏一直在屏幕里面和的效果
* 写了```absolute```一般要补一个```relative```
* 写了```absolute```或```fixed```要补```top```和```left```
* ```sticky```兼容性很差。

#### position: relative
* 一般用于给```absolute```元素做爸爸
* 配合```z-index```使用

#### position: absolute
* 脱离原来的位置，另起一层，可用于做对话框的关闭按钮
* ```absolute```是相对于祖先元素中，最近的一个定位元素定位的 (只要不是```static```就是定位元素)

#### position: fixed
* 让元素始终在视口中(viewport)，可以做烦人的广告和回到顶部按钮。
* 移动端尽量不要使用这个属性

## CSS动画
### 浏览器渲染原理
#### 渲染过程
1. 根据HTML构建HTML树(DOM)
2. 根据CSS构建CSS树(CSSOM)
3. 将两棵树合比成一颗渲染树(render tree)
4. Layout布局(文档流，盒模型，计算大小和位置)
5. Paint绘制(将颜色，阴影等画出来)
6. Compose合成(根据层叠关系展示画面)
   
#### 三种更新方式
1. 全走一遍

JS => Style => Layout => Paint => Composite

2. 跳过Layout

JS => Style => Paint => Composite

3. 跳过Layout和Paint

JS => Style => Composite

**怎么知到每个属性触发了什么流程**<https://csstriggers.com/>

#### CSS动画优化
看[谷歌的文章](https://developers.google.com/web/fundamentals/performance/rendering/stick-to-compositor-only-properties-and-manage-layer-count)

### transform
#### 四个常用功能
1. ```translate```位移
2. ```scale```缩放
3. ```rotate```旋转
4. ```skew```倾斜
   
注意：一般要配合```transition```过度，```inline```元素不支持```transform```，要先变成```block```

### transition
用于补充中间帧
#### 语法
```transition: 属性名 时长 过渡方式 延迟```

不是所有属性都能过渡，过度必须要有起始

### animation
#### 缩写语法
```animation: 时长|过渡方式|延迟|次数|方向|填充模式|是否暂停|动画名;```
#### @keyframes
详情请见[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes)

## 最后
CSS东西非常多，不可能全部记得，只需要记得个大概，用到时去查用法就可以。