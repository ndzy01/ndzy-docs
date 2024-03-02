---
title: 面试
order: 2006
---

## Set WeakSet Map WeakMap

- Set 成员唯一 无序且不重复，可以遍历。
- WeakSet 成员到时对象，成员都是弱引用，可以被垃圾回收机制回收，可以用来保存DOM节点，不容易造成内存泄露，不能遍历。
- Map 键值对的集合，可以遍历。
- WeakMap 只接受对象做键（null除外），不接受其他类型的值作为键名，键名是弱引用，键值任意。键名所指向的对象可以被垃圾回收机制回收，此时键名无效，无法遍历。

## setTimeOut 准时吗？

setTimeout的作用是在经过指定的延迟时间后，将函数排入事件队列，等待执行。然而，如果在延迟时间结束时，主线程正在忙于处理其他任务（例如执行长时间运行的同步代码、处理其他定时器或I/O事件），那么setTimeout的回调函数将不会立即执行，而是要等到主线程空闲下来才会被调用。

## js 数组打乱

```js
// Fisher-Yates洗牌算法
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    // 随机选择一个位于当前位置之前（包括当前位置）的数组元素索引
    const j = Math.floor(Math.random() * (i + 1));
    // 交换当前位置i和随机位置j的元素
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
```

## ajax

```js
const xhr = new XMLHttpRequest();
xhr.open('GET', 'url', true);
xhr.responseType = 'json';
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onreadystatechange = function () {
  if (xhr.readyState == XMLHttpRequest.DONE) {
    if (xhr.status == 200) {
      // 请求成功，处理响应数据
      var response = xhr.response;
    } else {
      // 请求失败，处理错误
    }
  }
};
// 发送请求
xhr.send();
// 取消请求
xhr.abort();
```

## 深拷贝

```js
JSON.parse(JSON.stringify(obj));
structuredClone(obj);

function deepClone(obj, hash = new WeakMap()) {
  if (obj === null) return null;
  if (typeof obj !== 'object') return obj;
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);

  // 如果循环引用了就用weakMap来解决
  if (hash.has(obj)) return hash.get(obj);

  var cloneObj = new obj.constructor();
  hash.set(obj, cloneObj);

  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloneObj[key] = deepClone(obj[key], hash);
    }
  }
  return cloneObj;
}
```

## 节流，防抖

```js
// 防抖
function debounce(func, wait) {
  let timeout;

  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// 节流
function throttle(func, limit) {
  let inThrottle;

  return function executedFunction(...args) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}
```

## bind 实现

```js
if (!Function.prototype.bind) {
  Function.prototype.bind = function (context, ...boundArgs) {
    // 保存调用bind的函数引用
    var self = this;

    // 返回一个新函数
    return function (...args) {
      // 将参数合并
      var finalArgs = [...boundArgs, ...args];
      // 使用apply调用原函数，设置this上下文和合并的参数
      return self.apply(context, finalArgs);
    };
  };
}
```

## map 实现

```js
if (!Array.prototype.customMap) {
  Array.prototype.customMap = function (callback, thisArg) {
    if (this == null) {
      throw new TypeError('this is null or not defined');
    }
    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }

    const O = Object(this); // 将this转换为对象
    const len = O.length >>> 0; // 将length转换为无符号整型
    const A = new Array(len); // 创建新数组用于存储结果

    for (var k = 0; k < len; k++) {
      // 检查k是否在数组的原型链上
      if (k in O) {
        const kValue = O[k]; // 获取数组的元素值
        const mappedValue = callback.call(thisArg, kValue, k, O); // 调用callback
        A[k] = mappedValue; // 存储返回的值
      }
    }

    return A; // 返回新数组
  };
}
```

## 观察者模式 发布/订阅 模式

## Diff算法的核心步骤

- 比较根元素类型
- 比较相同元素的类型
- 比较子元素列表

## Fiber
1. 可中断的工作