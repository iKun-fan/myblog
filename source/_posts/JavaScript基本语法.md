# 表达式和语句
JavaScript程序是一行一行地执行的，一般情况下，每一行就是一个语句。
```javascript
let a = 1 + 3;
```
这就是一条语句，它声明了变量```a```，并把```1 + 3```的计算结果赋值给```a```。其中，```1 + 3```叫做表达式，一般情况，表达式是为了得到返回值的计算式。

语句和表达式的区别在于，前者主要为了进行某种操作，一般情况下不需要返回值；后者则是为了得到返回值，一定会返回一个值。

语句以分号结尾，一个分号表示一个语句结束，多个语句可也写在一行里。

# 标识符
标识符（identifier）指的是用来识别各种值的合法名称。最常见的标识符就是变量名，以及后面要提到的函数名。JavaScript 语言的标识符对大小写敏感，所以a和A是两个不同的标识符。

命名规则：

* 第一个字符可以是任何Unicode字母，和```$```以及```_```
* 第二个字和后面的字符出了Unicode外还可以是数字。

以下是合法的标识符
```javascript
prime
_tmp
$tmp
Π
我是合法标识符
```

以下是不合法的标识符
```javascript
1a  //第一个不能是数字
*** //不能包含星号
a+b //不能包含加号
-b  //不能包含减号和连词线
```

注意，JavaScript还有一些保留字，不能作为标识符。
arguments、break、case、catch、class、const、continue、debugger、default、delete、do、else、enum、eval、export、extends、false、finally、for、function、if、implements、import、in、instanceof、interface、let、new、null、package、private、protected、public、return、static、super、switch、this、throw、true、try、typeof、var、void、while、with、yield。

# if else语句
```if```结构先判断一个表达式的布尔值，然后根据布尔值的真伪，执行不同的语句。所谓布尔值，指的是 JavaScript 的两个特殊值，```true```表示“真”，```false```表示“假”。
```javascript
if (布尔值){
    语句1;
    ···
}
//当只有一条语句时，大括号可以省略
if (布尔值) 语句;
```
如果为“真”则执行```if```后面的语句，如果为“假”则跳过紧跟着```if```的语句。

注意，```if```中有赋值表达式```=```，相等运算符```==```和严格相等运算符```===```，它们是不一样的，要注意区别。

在```if```代码块后面还可以跟一个```else```代码块，表示不满足条件时要执行的代码。
```javascript
if (a === 2){
    //满足条件时执行
}
else {
    //不满足条件时执行
}
```
还可以多个```if...else```连用。
```javascript
if (a === 1){
    //...
}
else if (a === 2){
    //...
}
else if (a === 3){
    //...
}
else{
    //...
}
```

# while和for语句
```while```语句包括一个循环条件和一段代码块，只要条件为真，就不断循环执行代码块。
```javascript
while (条件){
    语句;
    ...
}
//或者
while (条件) 语句;
```
例子：
```javascript
let i = 0;

while(i < 100){
    console.log('i是:'+ i);
    i ++;
}
```

```for```语句是循环命令的另一种形式，可以指定循环的起点、终点和终止条件。它的格式如下。
```javascript
for (初始化表达式; 条件; 递增表达式){
    语句;
}
//或者
for (初始化表达式; 条件; 递增表达式) 语句;
```
初始化表达式用于确定循环变量的初始值，只在循环开始时执行一次；条件表达式在每轮循环都要执行这个表达式，只有这个表达式为真时才继续循环；递增表达式在每轮循环最后一个操作，用来递增循环变量。

例子
```javascript
const x = 3;

for (let i = 0; i < x; i++){
    console.log(i);
}
//0
//1
//2
```

# break和continue语句
```break```语句和```continue```语句都具有跳转作用，可以让代码不按既有的顺序执行。

```break```语句用于跳出代码块或循环。
```javascript
for (let i = 0; i < 5; i++){
    console.log(i);
    if (i === 3){
        break;
    }
}
```
执行到```i```等于3时，就会跳出循环。

```continue```语句用于立即终止本轮循环，返回循环结构的头部，开始下一轮循环。
```javascript
let i = 0;

while (i < 100){
    i++;
    if (i % 2 === 0){
        continue;
    }
    console.log('当前i是:'+ i);
}
```
上面代码只有在```i```为奇数时，才会输出```i```的值。如果```i```为偶数，则直接进入下一轮循环。

# label
JavaScript 语言允许，语句的前面有标签（label），相当于定位符，用于跳转到程序的任意位置，标签的格式如下。
```javascript
label:
    语句
```
标签可以是任意的标识符，但不能是保留字，语句部分可以是任意语句。

标签通常与```break```语句和```continue```语句配合使用，跳出特定的循环。
```javascript
top:
    for (let i = 0; i < 3; i++){
        for (let j = 0; j < 3; j++){
            if (i === 1 && j === 1){
                break top;
            }
            console.log('i='+ i +', j='+ j);
        }
    }
```
上面代码为一个双重循环区块，```break```命令后面加上了```top```标签（注意，```top```不用加引号），满足条件时，直接跳出双层循环。如果```break```语句后面不使用标签，则只能跳出内层循环，进入下一次的外层循环。