---
title: Jquery
stack: HTML & CSS
slug: the-dojo-coffee-house
---

## 1. jQuery 基本操作

jQuery 的设计思想和用法就是，"选择某个元素，对这个元素进行某种操作"。

使用 jQuery 的方式就是将某个选择表达式，放入构造函数 jQuery 中，返回对这个元素的一系列操作。

### 1.1 获取元素

获取元素的选择表达式有两种，一种是**CSS 选择器**，一种式特有的**jQuery 选择器。**在获取完元素之后还可以对结果进行过滤。

#### css 选择器

```javascript
$(document); //选择整个文档对象

$("#myId"); //选择ID为myId的网页元素

$("div.myClass"); // 选择class为myClass的div元素

$("input[name=first]"); // 选择name属性等于first的input元素
```

#### jQuery 选择器

```javascript
$("a:first"); //选择网页中第一个a元素

$("tr:odd"); //选择表格的奇数行

$("#myForm :input"); // 选择表单中的input元素

$("div:visible"); //选择可见的div元素

$("div:gt(2)"); // 选择所有的div元素，除了前三个

$("div:animated"); // 选择当前处于动画状态的div元素
```

#### 对选择器返回的结果过滤

```javascript
$("div").has("p"); // 选择包含p元素的div元素

$("div").not(".myClass"); //选择class不等于myClass的div元素

$("div").filter(".myClass"); //选择class等于myClass的div元素

$("div").first(); //选择第1个div元素

$("div").eq(5); //选择第6个div元素
```

### 1.2 链式操作

所谓链式操作，就是我们用获取了某个元素，直接调用返回来的方法即可。

```javascript
$("div").find("h3").eq(2).html("Hello");

$("div") //找到div元素
  .find("h3") //选择其中的h3元素

  .eq(2) //选择第3个h3元素

  .html("Hello"); //将它的内容改为Hello
```

jQuery 还提供了 end()方法，用于返回上一部操作。

```javascript
$("div")
  .find("h3")

  .eq(2)

  .html("Hello")

  .end() //退回到选中所有的h3元素的那一步

  .eq(0) //选中第一个h3元素

  .html("World"); //将它的内容改为World
```

### 1.3 创建元素

直接调用 jQuery 的方法传入对应的字符串即可

```javascript
$("<p>Hello</p>");

$('<li class="new">new list item</li>');
```

### 1.4 移动元素

jQuery 提供了两组方法来移动元素。

- 第一组是 after 和 insertAfter ，两个方法效果一样。
- 第二组 是 before 和 insertBefore ， 同上。

#### after 和 insertAfter

```javascript
//初始化
<div class="container">
  <h2>Greetings</h2>
  <div class="inner">Hello</div>
  <div class="inner">Goodbye</div>
</div>


//	执行这语句
$( ".inner" ).after( "<p>Test</p>" );
//两个语句等价
$( "<p>Test</p>").insertAfter(".inner").

//得出的结果
<div class="container">
  <h2>Greetings</h2>
  <div class="inner">Hello</div>
  <p>Test</p>
  <div class="inner">Goodbye</div>
  <p>Test</p>
</div>
```

#### before 和 insertBefore

```javascript
//初始化
<div class="container">
  <h2>Greetings</h2>
  <div class="inner">Hello</div>
  <div class="inner">Goodbye</div>
</div>

//执行这语句
$( ".inner" ).before( "<p>Test</p>" );

//两个语句等价
$( "<p>Test</p>").insertBefore(".inner").


<div class="container">
  <h2>Greetings</h2>
  <p>Test</p>
  <div class="inner">Hello</div>
  <p>Test</p>
  <div class="inner">Goodbye</div>
</div>
```

### 1.5 修改元素的属性

jQuery 提供了 attr 这个方法来修改元素的属性。
