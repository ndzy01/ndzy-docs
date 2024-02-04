---
title: 动态规划
order: 1004
---

<TOC></TOC>

<code src="./_dong-tai-gui-hua/index.tsx"></code>

> 动态规划问题的一般形式就是求最值; 核心问题：穷举

## 三要素

- 重叠子问题
- 最优子结构
- 状态转移方程

**明确 base case -> 明确「状态」-> 明确「选择」 -> 定义 dp 数组/函数的含义。**

```python
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

## 例题

<L name="斐波那契数" src="https://leetcode.cn/problems/fibonacci-number/"></L>

<L name="零钱兑换" src="https://leetcode.cn/problems/coin-change/"></L>
