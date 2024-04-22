---
title: 准备
order: 2006
---

<L name="101道js面试题" src="https://cdn.jsdelivr.net/gh/ndzy01/img/2024-03-27-08-21-55_eea8fcc0-6ab1-454c-94d3-8cbb89884ff9_img_101%E9%81%93js%E9%9D%A2%E8%AF%95%E9%A2%98.png"></L>

<L name="前端知识体系" src="https://cdn.jsdelivr.net/gh/ndzy01/img/2024-03-27-08-24-46_69fa97c6-53d9-419c-ad0e-3a65696e2978_img_%E5%89%8D%E7%AB%AF%E7%9F%A5%E8%AF%86%E4%BD%93%E7%B3%BB.png"></L>

<L name="4" src="https://blog.csdn.net/XH_jing/article/details/111313546"></L>

<L name="9" src="https://www.nowcoder.com/creation/manager/columnDetail/0DQQQm"></L>

`>>` 运算符常用于对数进行快速除以2的幂次的操作，如 num >> 1 等价于 num / 2，并对结果向下取整。但使用时要注意符号位的影响。

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

## 数组 IndexOf

```js
if (!Array.prototype.customIndexOf) {
  Array.prototype.customIndexOf = function (target, fromIndex) {
    // 若数组为空或者 fromIndex 超出数组长度，返回 -1
    if (this == null || this.length === 0 || fromIndex >= this.length) {
      return -1;
    }

    // 处理fromIndex为负数的情况
    const startIndex = Math.max(fromIndex | 0, 0); // fromIndex为负数时，确保startIndex不小于0

    // 遍历数组，寻找目标元素
    for (let i = startIndex; i < this.length; i++) {
      if (this[i] === target) {
        return i;
      }
    }

    // 如果未找到，返回 -1
    return -1;
  };
}
```

## promise

```js
class SimplePromise {
  constructor(executor) {
    this.PENDING = 'pending';
    this.FULFILLED = 'fulfilled';
    this.REJECTED = 'rejected';
    this.state = this.PENDING;
    this.value = null;
    this.reason = null;
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];

    const resolve = (value) => {
      if (this.state === this.PENDING) {
        this.state = this.FULFILLED;
        this.value = value;
        this.onFulfilledCallbacks.forEach((callback) => callback(value));
      }
    };

    const reject = (reason) => {
      if (this.state === this.PENDING) {
        this.state = this.REJECTED;
        this.reason = reason;
        this.onRejectedCallbacks.forEach((callback) => callback(reason));
      }
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (value) => value;
    onRejected =
      typeof onRejected === 'function'
        ? onRejected
        : (reason) => {
            throw reason;
          };

    let promise2 = new SimplePromise((resolve, reject) => {
      if (this.state === this.FULFILLED) {
        setTimeout(() => {
          try {
            const result = onFulfilled(this.value);
            resolve(result);
          } catch (error) {
            reject(error);
          }
        }, 0);
      }

      if (this.state === this.REJECTED) {
        setTimeout(() => {
          try {
            const result = onRejected(this.reason);
            resolve(result);
          } catch (error) {
            reject(error);
          }
        }, 0);
      }

      if (this.state === this.PENDING) {
        this.onFulfilledCallbacks.push(() => {
          setTimeout(() => {
            try {
              const result = onFulfilled(this.value);
              resolve(result);
            } catch (error) {
              reject(error);
            }
          }, 0);
        });

        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              const result = onRejected(this.reason);
              resolve(result);
            } catch (error) {
              reject(error);
            }
          }, 0);
        });
      }
    });

    return promise2;
  }
}
```

## url 解析

```js
function getURLParameters(url) {
  // 使用 URL 对象解析传入的 url
  const params = new URLSearchParams(new URL(url).search);

  // 使用扩展运算符将所有参数转换为键值对数组，然后转换为对象
  const parameters = Object.fromEntries(params.entries());

  return parameters;
}
```

## 观察者模式 发布/订阅 模式

## Diff算法的核心步骤

- 比较根元素类型
- 比较相同元素的类型
- 比较子元素列表

## Fiber

Fiber是React 16引入的新架构，它主要目的是增强React应用的性能，特别是在动画、布局和手势等交互性强的场景下。Fiber架构的关键目标是使React的渲染过程可以被打断和分片处理，从而使更新过程可以适应用户的操作，提高应用的响应性。

在Fiber架构之前，React使用了递归的方式来遍历组件树并进行差异更新，这个过程称为Reconciliation（协调）。这种方法的问题在于，一旦开始，它就不能停止，直到整个组件树遍历完毕。对于大型应用来说，这可能会导致主线程被长时间占用，从而导致性能问题，例如动画卡顿或响应用户输入的延迟。

为了解决这个问题，Fiber引入了以下几个关键概念：

- 任务分割：Fiber通过将渲染工作分割成小块（称为Fibers）来解决递归更新的问题。每个Fiber代表了一个工作单元，React可以执行或暂停这些工作单元，然后在适当的时候回来继续未完成的工作。
- 优先级调度：React可以为不同的更新分配不同的优先级。例如，对于用户输入或动画相关的更新可以分配较高的优先级，而不急迫的数据获取则可以分配较低的优先级。这样，React可以先执行高优先级的任务，保证关键的用户交互不会被延迟。
- 并发模式：Fiber架构的另一个重要特性是支持并发模式（Concurrent Mode）。在并发模式下，React可以准备多个版本的UI，这些UI对应于应用中不同的状态。当一个更新被打断时，React可以丢弃未完成的工作，然后根据最新的状态重新开始。
- 错误边界：Fiber架构引入了错误边界的概念，这使得开发者可以更好地处理React组件树中的错误。当子组件树中发生错误时，错误边界可以捕获这些错误，并提供备用的UI，而不是导致整个应用崩溃。
- 新的生命周期方法：为了更好地适应Fiber的工作方式，React引入了新的生命周期方法，如getDerivedStateFromProps和getSnapshotBeforeUpdate。

Fiber架构极大地改进了React的性能和用户体验，它允许React应用更加平滑地进行复杂的更新，同时提供了开发者友好的工具来管理这些更新。此外，Fiber使得React团队可以在未来引入更多的优化和新特性，比如懒加载组件、时间切片（Time Slicing）等。

## 对称加密&非对称加密

## https和http

1. **安全性** HTTP：不安全，因为它以明文形式传输数据，这意味着数据在传输过程中可以被第三方截获和查看。HTTPS：安全，因为它在HTTP的基础上添加了SSL/TLS安全层。SSL/TLS提供了加密、身份验证和数据完整性，确保数据传输过程中的安全。
2. **端口** HTTP：默认使用80端口。HTTPS：默认使用443端口。
3. **性能** HTTP：由于没有加密过程，通常比HTTPS快一些。HTTPS：由于涉及加密解密过程，可能会稍慢一些，尽管现代技术（如HTTP/2、更快的加密算法）已经缩小了性能差距。
4. **URL格式** HTTP：URL以http://开头。HTTPS：URL以https://开头。
5. **SSL/TLS证书** HTTP：不需要SSL/TLS证书。HTTPS：需要SSL/TLS证书来建立安全连接。证书由证书颁发机构（CA）颁发，证明服务器的身份。
6. **数据保护** HTTP：不提供数据保护，任何人都可以看到传输的内容。HTTPS：通过加密算法保护数据，使之即使被拦截也无法被阅读。
7. **搜索引擎优化（SEO）** HTTP：传统的HTTP网站在搜索引擎排名中的信任度较低。HTTPS：搜索引擎，如Google，更倾向于HTTPS网站，并将其作为排名因素之一。
8. **用户信任** HTTP：用户对使用HTTP的网站的信任度较低，特别是当涉及敏感数据时。HTTPS：让用户放心在网站上进行交易和输入个人信息，因为它显示一个安全锁图标，表明连接是安全的。随着网络安全意识的提高，HTTPS正在变得越来越流行。对于涉及敏感数据的网站（如电子商务、在线银行等），HTTPS已成为事实上的标准。此外，许多现代Web技术（如HTTP/2和某些Web API）只在HTTPS环境下可用，这进一步推动了HTTPS的普及。

## 三次握手

- 客户端首先发送一个带有 SYN 标志的数据包给服务端
- 服务端接受 SYN 数据包之后，回传一个 SYN/ACK 标志的数据包以示传达确认连接信息
- 客户端收到 SYN/ACK 的确认数据包之后，再回传一个 ACK 标志的数据包给服务端，表示‘握手’结束

## TCP 的四次挥手简单说一下

- 客户端发送 FIN 报文给服务端,请求关闭连接
- 服务端收到 FIN 报文后发送 ACK 报文给客户端确认，但依然可以继续发送数据。
- 服务端也没有数据需要发送时,发送 FIN 报文 给客户端
- 客户端收到 FIN 报文后，发送 ACK 报文确认，服务端关闭，客户端等待 2MSL 后关闭,此时 TCP 连接关闭。

## HTTP OPTIONS

HTTP OPTIONS 方法是一个预检请求，用来询问服务器支持哪些HTTP方法和功能，或者用于跨源资源共享（CORS）中的预检请求，以确定是否安全发送一个跨源请求。

## 强缓存&协商缓存

- 强缓存是指浏览器直接从本地缓存中获取资源，而不需要向服务器发送请求。当一个资源被强缓存时，只要缓存有效，浏览器就不会再向服务器检查是否有更新。强缓存主要通过以下两种HTTP响应头来控制
- 当强缓存过期后，浏览器会向服务器发送请求以验证本地缓存的资源是否仍然是最新的，这个过程称为协商缓存。如果服务器确定浏览器上的资源仍然是最新的，它会返回一个304 Not Modified状态码，告诉浏览器直接使用本地缓存。

## HTTP2.0&HTTP1.0 区别

- HTTP/2采用二进制格式而非文本格式
- HTTP/2是完全多路复用的，而非有序并阻塞的——只需一个连接即可实现并行
- 使用报头压缩，HTTP/2降低了开销
- HTTP/2让服务器可以将响应主动“推送”到客户端缓存中

## 选择排序

> 选择排序是一种简单的排序算法，它的基本思想是遍历数组，每次从未排序的部分找出最小（或最大）元素，将其放到已排序部分的末尾

```js
const selectionSort = (arr) => {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    // 假设当前索引的元素是最小的
    let minIndex = i;
    for (let j = i + 1; j < len; j++) {
      // 如果发现更小的元素，更新最小元素的索引
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    // 如果最小元素的索引不是当前索引，交换它们的位置
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
};
```

## 二分查找

```js
const binarySearch = (sortedArray, target) => {
  let left = 0;
  let right = sortedArray.length - 1;

  while (left <= right) {
    // 计算中间索引，位运算符向下取整
    const mid = left + ((right - left) >> 1);
    const midValue = sortedArray[mid];

    // 检查中间的元素是否是目标值
    if (midValue === target) {
      return mid; // 找到目标，返回其索引
    } else if (midValue < target) {
      left = mid + 1; // 目标在右侧
    } else {
      right = mid - 1; // 目标在左侧
    }
  }

  // 未找到目标，返回-1
  return -1;
};
```

## 快速排序

> 快速排序是一种高效的排序算法，采用分治策略来对一个数组进行排序。

````js
const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  // 选择"基准"（pivot）元素，这里选择数组中间的元素
  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = arr.splice(pivotIndex, 1)[0];
  const left = [];
  const right = [];

  // 将比基准元素小的元素放到左边数组，比基准元素大的放到右边数组
  for (const element of arr) {
    if (element < pivot) {
      left.push(element);
    } else {
      right.push(element);
    }
  }

  // 递归排序左右两边的数组，然后将它们与基准元素合并
  return [...quickSort(left), pivot, ...quickSort(right)];
};```
````

## 归并排序

> 归并排序是一种高效的分治排序算法，它将数组分割成更小的数组，直到每个小数组只有一个元素，然后将这些数组合并回来，过程中排序元素。

```js
const mergeSort = (arr) => {
  // 递归终止条件：数组长度为1时，无需排序，直接返回数组
  if (arr.length <= 1) {
    return arr;
  }

  // 找到数组的中点，并递归分割数组
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  // 递归排序两边的数组，然后将它们合并在一起
  return merge(mergeSort(left), mergeSort(right));
};

// 合并两个数组的函数，同时排序
const merge = (left, right) => {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // 遍历两个数组，按顺序选择两者之间较小的元素放入结果数组
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // 如果左边或右边数组还有剩余的元素，将它们追加到结果数组之后
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};
```

## 回文字符串判断

```js
const isPalindrome = (str) => {
  // 将字符串转换为统一的小写并去除所有非字母数字字符
  const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

  // 反转字符串
  const reversedStr = cleanedStr.split('').reverse().join('');

  // 比较原始字符串与反转后的字符串是否相等
  return cleanedStr === reversedStr;
};
```
