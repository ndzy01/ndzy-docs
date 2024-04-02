---
title: 文档
order: 0
---

## 文档

<L name="101道js面试题" src="https://cdn.jsdelivr.net/gh/ndzy01/img/2024-03-27-08-21-55_eea8fcc0-6ab1-454c-94d3-8cbb89884ff9_img_101%E9%81%93js%E9%9D%A2%E8%AF%95%E9%A2%98.png"></L>

<L name="前端知识体系" src="https://cdn.jsdelivr.net/gh/ndzy01/img/2024-03-27-08-24-46_69fa97c6-53d9-419c-ad0e-3a65696e2978_img_%E5%89%8D%E7%AB%AF%E7%9F%A5%E8%AF%86%E4%BD%93%E7%B3%BB.png"></L>

<L name="4" src="https://blog.csdn.net/XH_jing/article/details/111313546"></L>

<L name="9" src="https://www.nowcoder.com/creation/manager/columnDetail/0DQQQm"></L>

```
//一、实现一个进度函数，要求：
// 串行执行若干个异步请求（题目中get1，get2，get3），所有请求成功后，按请求顺序输出请求返回结果的数组。
// 如果某个请求执行失败，打印已成功的结果数组，并终止后续的请求。
// 如果用户主动终止进度函数，同样，打印已成功的结果数组，并终止后续的请求。
// 注意：
// 1，以下代码的最终输出应该是 [1,2]
// 2，isTerminated为全局变量，用于模拟用户在请求的执行过程中终止请求（不考虑已发出请求的abort问题）。
// 3，考虑到后续执行异步请求的个数会增加，要求下次有新的异步请求，尽量少的改动代码。

const get1 = () => new Promise(resolve => setTimeout(() => resolve("1"), 2000));
const get2 = () => new Promise(resolve => setTimeout(() => resolve("2"), 3000));
const get3 = () => new Promise(resolve => setTimeout(() => resolve("3"), 3000));

let isTerminated = false;
```

## SyntheticEvent

在React中，SyntheticEvent是一种封装了浏览器原生事件（native event）的跨浏览器包装器。SyntheticEvent提供了与原生事件一致的接口，无论你的代码运行在哪种浏览器上。

https://www.yuque.com/12312wo/xqvhf0
