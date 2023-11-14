---
title: 算法框架
---

```ts
// 单链表
class ListNode {
  val: number
  next: ListNode | null

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

// 二叉树
class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}
```

## 算法框架

**数据结构的种类很多，但他们存在的目的都是在不同的应用场景，尽可能高效的增删改查**

### 数据结构的存储方式

- 数组（顺序存储）
- 链表（链式存储）

#### 优缺点

- 数组
  - 优点：可随机访问；相对节约存储空间；可以通过索引快速找到对应元素的位置
  - 缺点：扩容、插入、删除，相对困难
- 链表
  - 优点：扩容、插入、删除，相对容易
  - 随机访问困难；相对浪费存储空间

### 数据结构的基本操作

#### 遍历 线性（循环）非线性（递归）

```js
// 线性
for (let i = 0; i < arr.length; i++) {
  const ele = arr[i]

  // 。。。。。。
  // 逻辑处理
}

// 非线性
// 需要做逻辑处理的地方就是根所在的地方 前序在前 中序在中 后序在后
function traverse(root) {
  // 前序位置 根左右

  traverse(root.left)

  // 中序位置 左根右

  traverse(root.right)

  // 后序位置 左右根
}
```

## 动态规划

```py
# 自顶向下递归的动态规划
def dp(状态1, 状态2, ...):
    for 选择 in 所有可能的选择:
        # 此时的状态已经因为做了选择而改变
        result = 求最值(result, dp(状态1, 状态2, ...))
    return result

# 自底向上迭代的动态规划
# 初始化 base case
dp[0][0][...] = base case
# 进行状态转移
for 状态1 in 状态1的所有取值：
    for 状态2 in 状态2的所有取值：
        for ...
            dp[状态1][状态2][...] = 求最值(选择1，选择2...)

```

## 回溯

```py
result = []
def backtrack(路径, 选择列表):
    if 满足结束条件:
        result.add(路径)
        return

    for 选择 in 选择列表:
        做选择
        backtrack(路径, 选择列表)
        撤销选择

```

```ts
// DFS 算法把「做选择」「撤销选择」的逻辑放在 for 循环外面
const dfs = function (root) {
  if (root == null) return
  // 做选择
  console.log('我已经进入节点 ' + root + ' 啦')
  for (let i in root.children) {
    dfs(root.children[i])
  }
  // 撤销选择
  console.log('我将要离开节点 ' + root + ' 啦')
}

// 回溯算法把「做选择」「撤销选择」的逻辑放在 for 循环里面
const backtrack = function (root) {
  if (root == null) return
  for (let i in root.children) {
    // 做选择
    console.log(
      '我站在节点 ' + root + ' 到节点 ' + root.children[i] + ' 的树枝上',
    )
    backtrack(root.children[i])
    // 撤销选择
    console.log(
      '我将要离开节点 ' + root.children[i] + ' 到节点 ' + root + ' 的树枝上',
    )
  }
}
```

## dfs

## bfs

```js
// 注意：javascript 代码由 chatGPT🤖 根据我的 java 代码翻译，旨在帮助不同背景的读者理解算法逻辑。
// 本代码不保证正确性，仅供参考。如有疑惑，可以参照我写的 java 代码对比查看。

var BFS = function (start, target) {
  var q = [] // 核心数据结构
  var visited = new Set() // 避免走回头路
  var step = 0

  q.push(start) // 将起点加入队列
  visited.add(start)

  while (q.length > 0) {
    var sz = q.length
    /* 将当前队列中的所有节点向四周扩散 */
    for (var i = 0; i < sz; i++) {
      var cur = q.shift()
      /* 划重点：这里判断是否到达终点 */
      if (cur == target) return step
      /* 将 cur 的相邻节点加入队列 */
      var adj = cur.adj()
      for (var j = 0; j < adj.length; j++) {
        var x = adj[j]
        if (!visited.has(x)) {
          q.push(x)
          visited.add(x)
        }
      }
    }
    step++
  }
  // 如果走到这里，说明在图中没有找到目标节点
}
```
