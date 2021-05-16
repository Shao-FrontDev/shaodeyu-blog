---
title: Promise
stack: JavaScript
slug: promise
---

**Ajax Promise Axios**
\*\*

## 异步编程

- **fs 文件操作**
- **数据库操作**
- **AJAX**
- **定时器**

\*\*
\*\*
\*\*
\*\*
** Promise 是一个构造函数，在使用 Promise 的时候需要对他进行实例化**
\*\*
**Promise 接收一个参数，这个参数是一个函数。 ---- 记为 fn**
\*\*
**Fn 这个函数接收两个函数**
**resolve 解决 函数类型的数据**
**reject 拒绝 函数类型的数据**
\*\*

\*\*

### Promise 和 AJAX 的结合

** 普通 AJAX **

```javascript
const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  let request = new XMLHttpRequest();

  request.open("GET", "API");

  request.onreadystatechange = function () {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        console.log(request.response);
      } else {
        console.log(request.status);
      }
    }
  };
});
```

**结合 Promise**

```javascript
const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  const p = new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();

    request.open("GET", "API");

    request.onreadystatechange = function () {
      if (request.readyState === 4) {
        if (request.status >= 200 && request.status < 300) {
          resolve(request.response);
        } else {
          reject(request.status);
        }
      }
    };
  });

  p.then(
    (value) => {
      console.log(value);
    },
    (reason) => {
      console.log(reason);
    }
  );
});
```

使用 Promise 封装 AJAX

```javascript
function sendAJAX(url) {
  return new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();
    request.open("GET", url);
    request.onreadystatechange = () => {
      if (request.readyState === 4) {
        if (request.status >= 200 && request.status < 300) {
          resolve(request.response);
        } else {
          reject(request.status);
        }
      }
    };
    request.send();
  });
}

sendAJAX("https://api.apiopen.top/getJoke").then(
  (value) => {
    console.log(value);
  },
  (reason) => {
    console.log(reason);
  }
);
```

## Promise 的状态

实例对象中的一个属性【PromiseState】

- pending 未决定的
- resolved / fullfilled 成功
- rejected 失败

## Promise 对象的值

实例对象中的另外一个属性【PromiseResult】
保存着对象【成功/失败】的结果

- resolve
- reject

**Promise 执行器中的代码是同步调用的**
\*\*

## Promise API

构造函数 API

- Promise.all
- Promise.race
- Promise.resolve
- Promise.reject

实例对象 API

- then
- catch

### Promise.resolve()

如果传入的参数为非 Promise 类型的对象，则返回的结果为成功的 promise 对象
如果传入的参数为 Promise 对象，则参数的结果决定了 resolve 的结果
