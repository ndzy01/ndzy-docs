---
title: 二叉树
order: 1003
---

<TOC></TOC>

<code src="./_er-cha-shu/index.tsx"></code>

## 深入理解 前序，中序，后序

**前序，中序，后序是遍历二叉树过程中处理每一个节点的三个特殊时间点**

- 前序位置的代码在刚刚进入一个二叉树节点的时候执行
- 后序位置的代码在将要离开一个二叉树节点的时候执行
- 中序位置的代码在一个二叉树节点左子树都遍历完，即将开始遍历右子树的时候执行

## 后序位置的特殊之处

**后序位置的代码不仅可以获取参数数据，还可以获取到子树通过函数返回值传递回来的数据**

## 二叉树解决的思维模式

> 无论使用那种思维模式，都需要思考： **如果单独抽出一个二叉树节点，它需要做什么事情？需要什么时候（前/中/后序位置）做？** 其他节点不用担心，递归函数会在所有节点上执行相同操作

#### 遍历 遍历一遍二叉树得出答案（回溯算法核心框架）

**是否可以通过遍历一遍二叉树得到答案？** 如果可以，用一个 `traverse` 函数配合外部变量实现，这叫 `遍历` 的思维模式

#### 分解问题 分解问题计算得出答案（动态规划核心框架）

**是否可以定义一个递归函数，通过子问题（子树）的答案推导出原问题的答案？** 如果可以，写出这个递归函数的定义，并充分利用这个函数的返回值，这叫 `分解问题` 的思维模式

## 例题

### 二叉树的最大深度 遍历思路 分解问题思路

<L name="二叉树的最大深度" src="https://leetcode.cn/problems/maximum-depth-of-binary-tree/"></L>

### 二叉树的直径 遍历思路 分解问题思路

<L src="https://leetcode.cn/problems/diameter-of-binary-tree/" name="二叉树的直径"></L>

### 给定一个二叉树

###### 问题 1：如果把根节点看做第 1 层，如何打印出每一个节点所在的层数？

###### 问题 2：如何打印出每个节点的左右子树各有多少节点？

```js
// 问题1
function traverse(root, level) {
  if (root == null) {
    return;
  }

  console.log(`节点 ${root} 在第 ${level} 层`);
  traverse(root.left, level + 1);
  traverse(root.right, level + 1);
}

traverse(root, 1);

// 问题2
const count = function (root) {
  if (root === null) {
    return 0;
  }
  const leftCount = count(root.left);
  const rightCount = count(root.right);
  // 后序位置
  console.log('节点 ' + root + ' 的左子树有 ' + leftCount + ' 个节点，右子树有 ' + rightCount + ' 个节点');

  return leftCount + rightCount + 1;
};

count(root);
```

## 动归/回溯/DFS

> DFS 算法和回溯算法：「做选择」和「撤销选择」到底在 for 循环外面还是里面的区别，DFS 算法在外面，回溯算法在里面

**动归/DFS/回溯算法都可以看做二叉树问题的扩展，只是它们的关注点不同：**

- 动态规划算法属于分解问题的思路，它的关注点在整棵「子树」。
- 回溯算法属于遍历的思路，它的关注点在节点间的「树枝」。
- DFS 算法属于遍历的思路，它的关注点在单个「节点」。

### 列 1

给定一棵二叉树，请你用分解问题的思路写一个 count 函数，计算这棵二叉树共有多少个节点。

```js
// 定义：输入一棵二叉树，返回这棵二叉树的节点总数
const count = function (root) {
  if (root == null) {
    return 0;
  }
  // 我这个节点关心的是我的两个子树的节点总数分别是多少
  const leftCount = count(root.left);
  const rightCount = count(root.right);
  // 后序位置，左右子树节点数加上自己就是整棵树的节点数
  return leftCount + rightCount + 1;
};
```

```js
const fib = function (N) {
  if (N === 1 || N === 2) return 1;
  return fib(N - 1) + fib(N - 2);
};
```

### 列 2

给定一棵二叉树，请你用遍历的思路写一个 traverse 函数，打印出遍历这棵二叉树的过程

```js
// 二叉树
const traverse = function (root) {
  if (root === null) return;
  console.log('从节点 ' + root + ' 进入节点 ' + root.left);
  traverse(root.left);
  console.log('从节点 ' + root.left + ' 回到节点 ' + root);

  console.log('从节点 ' + root + ' 进入节点 ' + root.right);
  traverse(root.right);
  console.log('从节点 ' + root.right + ' 回到节点 ' + root);
};
```

```js
// 多叉树
const Node = function () {
  this.val = 0;
  this.children = [];
};

function traverse(root) {
  if (root == null) return;
  for (let child of root.children) {
    console.log(`从节点 ${root} 进入节点 ${child}`);
    traverse(child);
    console.log(`从节点 ${child} 回到节点 ${root}`);
  }
}
```

```js
// 回溯算法框架
void backtrack(...) {
    for (int i = 0; i < ...; i++) {
        // 做选择
        ...

        // 进入下一层决策树
        backtrack(...);

        // 撤销刚才做的选择
        ...
    }
}

```

### 列 3

给定一棵二叉树，请你写一个 traverse 函数，把这棵二叉树上的每个节点的值都加一

```js
// dfs 着眼点是在单一的节点上
const traverse = function (root) {
  // 如果当前节点为空，则返回
  if (root == null) return;
  // 遍历过的每个节点的值加一
  root.val++;
  // 递归遍历左子树
  traverse(root.left);
  // 递归遍历右子树
  traverse(root.right);
};
```

```js
// DFS 算法把「做选择」「撤销选择」的逻辑放在 for 循环外面
const dfs = function (root) {
  if (root == null) return;
  // 做选择
  console.log('我已经进入节点 ' + root + ' 啦');
  for (let i in root.children) {
    dfs(root.children[i]);
  }
  // 撤销选择
  console.log('我将要离开节点 ' + root + ' 啦');
};

// 回溯算法把「做选择」「撤销选择」的逻辑放在 for 循环里面
const backtrack = function (root) {
  if (root == null) return;
  for (let i in root.children) {
    // 做选择
    console.log('我站在节点 ' + root + ' 到节点 ' + root.children[i] + ' 的树枝上');
    backtrack(root.children[i]);
    // 撤销选择
    console.log('我将要离开节点 ' + root.children[i] + ' 到节点 ' + root + ' 的树枝上');
  }
};
```

## 层序遍历（迭代遍历）

```ts
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const levelTraverse1 = function (root: TreeNode) {
  if (root === null) return;
  let res: number[][] = [];
  const q: TreeNode[] = [];
  q.push(root);

  // 从上到下遍历二叉树的每一层
  while (!(q.length === 0)) {
    const nodeValues: number[] = [];
    const sz = q.length;
    // 从左到右遍历每一层的每个节点
    for (let i = 0; i < sz; i++) {
      const cur: any = q.pop();
      nodeValues.push(cur.val);
      // 将下一层节点放入队列
      if (cur.left !== null) {
        q.push(cur.left);
      }
      if (cur.right !== null) {
        q.push(cur.right);
      }
    }

    res.push(nodeValues);
  }

  return res;
};
```

```ts
const levelTraverse2 = (root: TreeNode) => {
  const res: number[][] = [];
  if (root == null) {
    return res;
  }
  const nodes: TreeNode[] = [];
  nodes.push(root);
  traverse(nodes);
  return res;

  function traverse(curLevelNodes: TreeNode[]) {
    if (curLevelNodes.length === 0) {
      return;
    }
    // 前序位置，计算当前层的值和下一层的节点列表
    const nodeValues: number[] = [];
    const nextLevelNodes: TreeNode[] = [];
    for (let i = 0; i < curLevelNodes.length; i++) {
      const node = curLevelNodes[i];
      nodeValues.push(node.val);
      if (node.left != null) {
        nextLevelNodes.push(node.left);
      }
      if (node.right != null) {
        nextLevelNodes.push(node.right);
      }
    }
    // 前序位置添加结果，可以得到自顶向下的层序遍历
    // res.push(nodeValues);
    traverse(nextLevelNodes);
    // 后序位置添加结果，可以得到自底向上的层序遍历结果
    res.push(nodeValues);
  }
};
```
