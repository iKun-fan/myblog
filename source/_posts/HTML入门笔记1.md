# HTML入门笔记1

## HTML 是谁发明的
HTML是由Web的发明者 Tim Berners-Lee(李爵士)和同事 Daniel W. Connolly于1990年创立的一种标记语言

## HTML 起手应该写什么
以在VSCode中为例，在英文状态下输入!按下TAB键，就能生成HTML的骨架。关于骨架中的一些解释如下：

```<!DOCTYPE html>```文档类型为HTML。

```<html lang="en">```默认语言为英语，可以修改为zh-CN表示中文，也可以设置为其他语言。

```<head></head>```这对标签中的内容在浏览器中不会显示。

```<meta charset="UTF-8">```文字编码使用UTF-8，基本都使用UTF-8不修改。

```<meta http-equiv="X-UA-Compatible" content="IE=edge">```表示用最新的浏览器打开网页。

```<meta name="viewport" content="width=device-width, initial-scale=1.0">```表示网页在手机端可以自动缩放。

## 常用的章节标签
* ```h1~h6```标题标签，依次逐级递减，成对出现```<h1></h1>```。

* ```<section>```标签表示一个含有主题的独立部分，通常用在文档里面表示一个章节。

```
<section>
    <h2>第一章</h2>
    <p>...</p>
</section>
```
* ```<article>```标签表示页面里面一段完整的内容，即使页面的其他部分不存在，也具有独立使用的意义，通常用来表示一篇文章或者一个论坛帖子。
* ```<main>```标签表示页面的主题内容，一个页面只能有一个main标签。不能放置在```<header>、<footer>、<article>、<aside>、<nav>```等标签之中
* ```<aside>```标签用来放置与网页或文章主要内容间接相关的部分

## 全局属性
1. ```id```属性是元素在网页内的唯一标识符。但当页面中有多个相同```id```时，html也不会报错。
2. ```class```属性用来对网页元素进行分类。不同元素的```class```相同时，表示它们是一类元素。
3. ```title```属性用来为元素添加附加说明。当鼠标浮在元素上时，会显示```title```里的内容。
4. ```tabindex```给Tab的顺序。用户希望使用键盘操作网页时，就可以通过Tab来遍历网页中的元素，从而找到要交互的对象。

```tabindex```的值为正整数时，会按照从小到大的顺序来选中元素；为0时，会最后一个选中该元素；为-1时，不会选中该元素。

5. ```style```用于定义CSS样式。
6. ```hidden```是一个布尔属性，表示当前的网页元素不再跟页面相关，因此浏览器不会渲染这个元素，所以就不会在网页中看到它。
7. ```contenteditable```网页的内容默认是用户不能编辑，```contenteditable```属性允许用户修改内容。它有两个可能的值。

## 常用的内容标签
* ```<a>```标签用于表示链接，用户点击后会跳转到指定的网址。例如```<a href="https://www.google.com/">谷歌</a>```点击后就会访问谷歌。
* ```<strong>```用于强调所包含内容的重要性，默认以粗体显示。```<p>这次考试的重点是<strong>JavaScript</strong></p>```
* ```<em>```表示强调，默认以斜体显示。```<p><em>这次</em>>考试的重点是JavaScript</p>```
* ```<code>```表示标签内容是计算机代码，浏览器默认会以等宽字体显示。想要显示多行代码需要将```<code>```放到```<pre>```里。```<code>```只表示一行代码。
```
 <pre>
        <code>
            #include <stdio.h>
            int main()
            {
                printf("Hello World");
                return 0;
            }
        </code>
</pre>
```
* ```<pre>```表示保留原来的格式。即浏览器会保留该标签内部原始的换行和空格。浏览器默认以等宽字体显示标签内容。（参照上一条）

## 最后
HTML的标签非常多，要重点掌握常用的几个标签。其他标签用到的时候可以去网上查。

常用的HTML学习网站：

<https://developer.mozilla.org/zh-CN/docs/Web/HTML>

<https://wangdoc.com/html/>