---
title: 回溯算法
order: 1005
---

<TOC></TOC>

<code src="./_hui-su-suan-fa/index.tsx"></code>

> 回溯算法和 DFS 算法非常类似，本质上就是一种穷举算法; 回溯算法是在遍历 `树枝`，DFS 算法是在遍历 `节点`; 抽象地说，解决一个回溯问题，实际上就是遍历一棵决策树的过程，树的每个叶子节点存放着一个合法答案。你把整棵树遍历一遍，把叶子节点上的答案都收集起来，就能得到所有的合法答案。

## 思考路径

- 路径：也就是已经做出的选择
- 选择列表：也就是当前可以做的选择
- 结束条件：也就是到达决策树的底层，无法再做选择的条件

```ts
const result = [];

function backtrack(路径, 选择列表) {
  if (满足结束条件) {
    result.push(路径);

    return;
  }

  for (选择 in 选择列表) {
    // 做选择
    backtrack(路径, 选择列表);
    // 撤销选择
  }
}
```

> 其核心就是 for 循环里面的递归，在递归调用之前 `做选择`，在递归调用之后 `撤销选择`

## 例题

### 全排列

<L name="全排列" src="https://leetcode.cn/problems/permutations/"></L>

### N 皇后问题

<L name="N 皇后问题" src="https://leetcode.cn/problems/n-queens/"></L>
