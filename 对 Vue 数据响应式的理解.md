## 什么是Vue数据响应式

就是当数据改变，UI界面做出响应。
修改Vue实例中的data属性时，UI界面中的data会做出响应。
```javascript
new Vue({
    data: {
        n: 0
    },
    template:`
        <div>
            {{n}}
            <hr/>
            <button @click = "add">+1</button>
        </div>
    `,
    methons: {
        add() {
            this.n += 1
        }
    }
}).$mount("#app")
```

实现这种效果的一个核心API是`Object.defineProperty`。该方法会直接再一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。

## Vue中如何实现数据响应式

### 1. getter和setter

```javascript
const obj = {
    firstName = "Zhang",
    lastName = "San",
    get name() {
        return this.firstName + this.lastName
    },
    set name(name) {
        this.firstName = name[0],
        this.lastName = name.substring(1)
    },
    age: 24
}
obj.name = "王五"   // 触发setter
console.log("obj的姓名：" + obj.name)   // obj的姓名：王五
```

使用这种方法对`name`进行监听后，之后所有对`name`属性的读写都是通过getter和setter的。我们就可以在getter和setter中通知UI，从而进行更新。

### 2. Object.defineProperty

Vue中实现数据响应式主要使用JS的`Object.defineProperty`这个API可以设置属性的getter和setter，从而实现监听数据。

```javascript
const data = {
    name: "XiaoHong",
    age: 24
}

function observer(target) {
    if(typeof target !== "object" || target === null) {
        return
    }
    for(let key in target) {
        defineReactive(target, key, target[key])
    }
}

function defineReactive(target, key, value) {
    Object.defineProperty(target, key, {
        get (){
            return value
        },
        set (newValue){
            if(newValue !== value) {
                value = newValue()
                console.log("render")
            }
        }
    })
}

observer(dara)
data.name = "test"    // 会触发render
```

### 3. vm = new Vue({data:myData})
1. Vue会让vm成为myData的代理
2. 会对myData的所有属性进行监控
3. 当数据改变时触发UI更新

## Vue中数组变异方法

* `push()`
* `pop()`
* `shift()`
* `unshift()`
* `splice()`
* `sort()`
* `reverse()`

这些方法都会触发试图更新。