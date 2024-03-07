---
title: 文档
order: 0
---

## 文档

<L name="4" src="https://blog.csdn.net/XH_jing/article/details/111313546"></L>

<L name="9" src="https://www.nowcoder.com/creation/manager/columnDetail/0DQQQm"></L>

<L name="github" src="https://github.com/semlinker/reactjs-interview-questions/blob/master/README.md#%E7%9B%AE%E5%BD%95"></L>

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