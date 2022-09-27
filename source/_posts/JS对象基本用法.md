# 什么是对象
对象（object）是JavaScript的一种数据类型，也是唯一一种复杂数据类型。它是一组键值对（key-value）的集合，是一种无序的复合数据集合。

# 如何生成一个对象

```javascript
let obj = {'name': 'jack', 'age': 20 }
let obj = new Object({'name': 'jack', 'age': 20})
console.log({'name': 'jack', 'age': 20})
```
在上面的代码中分别是三种生成对象的写法，推荐使用前两种写法，大括号内就定义了一个对象，它们都有两对键值对，第一个键值对是```'name': 'jack'```其中```name```是键名，```jack```是键值。

**注意**，键名是字符串，不是标识符，可以包含任意字符，引号可以省略，省略之后只能写标识符，即使省略了引号，键名还是字符串。

# 属性名与属性值

每个key都是对象的属性名，每个value都是对象的属性值

如果键名是数值，会被自动转换为字符串。
```javascript
let obj = {
    1: 'a',
    3.2: 'b',
    1e2: true,
    1e-2: true,
    .234: true,
    0xFF: true
};

obj
// Object {
//   1: "a",
//   3.2: "b",
//   100: true,
//   0.01: true,
//   0.234: true,
//   255: true
// }
```

## 变量做属性名
```javascript
let x = 'name';
let obj = {x: 'jack'};  //这样写属性名是'x'
let obj = {[x]: 'jack'};    //这样写，属性名是'name'
```

只有加了[]才会当作变量求值。

## 对象的隐藏属性
在JavaScript中，每个对象都有一个隐藏属性，这个隐藏属性中存放着共有属性组成的对象的地址，也就隐藏属性存放着原型的地址。

```javascript
let obj = {};
obj.toString();
```
上述代码不会报错，因为obj的隐藏属性上有```toString()```

# 增删改查
## 删除对象的属性

```javascript
delete obj.xxx
//or
delete obj['xxx']

'xxx' in obj
//false
```
上面的代码都可以删除```obj```的```xxx```属性。

```javascript
obj.xxx = undefined

'xxx' in obj
//true
```
这段代码并不会删除```obj```的```xxx```属性，只是它的值是```undefined```

## 查看对象的属性
### 查看所有属性
```javascript
Object.keys(obj)    //查看自身属性
console.dir(obj)    //查看自身和共有属性
obj.hasOwnProperty('toString')  //判断一个属性是自身的还是共有的
```
### 查看属性
1. 中括号语法

```javascript
obj['key']
```
2. 点语法

```javascript
obj.key
```
**特别注意**，```obj[key]```，```key```不是```'key'```，这里的```key```是变量而不是字符串。

## 修改和增加对象的属性
1. 直接赋值

```javascript
let obj = {name: 'jack'};
obj.name = 'bill';
```

2. 批量赋值

```javascript
Object.assign(obj, {age: 20, gender: 'male'});
```

### 修改和增加共有属性
```javascript
let obj = {}, obj2 = {};
obj.toString = '123';
```
上述代码无法修改或增加共有属性，```obj.toString = '123'```只是在改obj自身属性，```obj2.toString```还是在原型上。

```javascript
Object.prototype.toString = '123';
```
这就能修改原型的属性，但一般不会这么做。