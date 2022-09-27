## 获取元素
jQuery要先获取到网页中的元素，然后对该元素进行操作。所以首先要通过```jQuery(selector)```（简写为```$()```）函数来选择元素。

* 通过CSS选择器获取元素：
```javascript
$(document)    //获取整个文档对象
$('#ID')    //获取id为ID的元素
$('span.Class')    //获取class为Class的span元素
$('input[name = first]')    //获取name属性为first的input元素
```

* 通过jQuery扩展的选择器获取元素：
```javascript
$(':button')    //选择所有按钮和类型为按钮的元素，等价于$('button,input[type='button']')
$('tr:first')    //选择表格的第一行
$('div:animated')    //选择处于动画状态的div元素
```

* 使用过滤器进一步锁定结果
```javascript
$('div').has('p')    //选择包含p元素的div元素
$('div').eq(3)    //选择第4个div元素
$('div').filter('.Class')    //选择class为Class的div元素
$('div').parent()    //选择div元素的父元素
```

## 链式操作

jQuery可以将操作连接在一起
```
$('#test').find('.child').addClass('red')
```

之所以能进行这样的操作，是因为jQuery每次都会返回一个对象，所以不同的操作可以连接到一起，jQuery大概样子和下面这段代码差不多：
```javascript
window.$ = window.jQuery = function (selectorOrArray){
    let elements
    if(typeof selectorOrArray === 'string') {    //可以接收字符串和数组
        elements = document.querySelectorAll(selectorOrArray)
    }else if(selectorOrArray instanceof Array) {
        elements = selectorOrArray
    }
    return  {
        //获取元素后不返回元素，返回对象，这里面的函数可以操作获取到的元素，并用闭包维持着elements
        addClass(className) {
            for(let i = 0; i < elements.length; i++) {
                elements[i].classList.add(className)
            }
            return this
            //把$作为返回值，相当于$从前面传递到了后面，就可以进行链式操作了
        },
        find(selector) {
            let array = []
            for(let i = 0; i < elements.length; i++) {
                const newElements = Array.from(elements[i].querySelectorAll(selector))
                array = array.concat(newElements)
            }
            array.oldApi = this
            return jQuery(array)
            //不能return this，这会导致函数返回到最初的对象，导致链式操作不符合预期
            //把选择出来的元素再传回给jQuery，保证链式操作符合预期
        }，
        // ...其他的各种函数
    }
}
```

## 增删改查
### 增
* 创建新元素

只需要把元素直接传入jQuery的构造函数
```javascript
$('<p class="test">hello world</p>')
$('ul').append('<li>list</li>')
```
* 复制使用```.clone()```

### 删
* 删除使用```.remove()```和```.detach()```
* 前者不保留删除元素的事件，后者保留

### 改
* 使用```insertAfter()```和```.after()```来移动元素，前者是直接操作该元素，后者是操作其他元素
* ```insertAfter()```把div元素移动到p元素后面，这种方法会返回div元素
```javascript
$('div').insertAfter($('p'))
```
* ```after()```把p元素移动到div元素前面，这种方法会返回p元素
```javascript
$('p').after($('div'))
```

### 查
jQuery使用同一个函数来完成取值和赋值
```javascript
$('h1').html()    //html()里面没有参数表示取h1的值
$('h1').html('hello world')    //html()里面有参数'hello world'表示对h1进行赋值
```

## 其他
jQuery还提供很多好用的api，具体查看[jQuery文档](https://www.jquery123.com/)

jQuery现在可能不再那么流行，但是学习他的设计模式对理解vue和react有很大帮助，并且还能从它的源码中学习到不少封装技巧和JS技巧。