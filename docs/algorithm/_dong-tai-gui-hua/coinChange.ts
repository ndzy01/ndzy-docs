// 零钱兑换

type CoinChange = (coins: number[], amount: number) => number;

export const coinChange1: CoinChange = (coins, amount) => {
  return dp1(coins, amount);
};

const dp1: CoinChange = (coins, amount) => {
  // base case
  if (amount === 0) return 0;
  if (amount < 0) return -1;

  let res = Number.MAX_VALUE;

  for (const coin of coins) {
    // 计算子问题的结果
    const subProblem = dp1(coins, amount - coin);

    // 子问题无解则跳过
    if (subProblem === -1) continue;

    // 在子问题中选择最优解，然后 +1
    res = Math.min(res, subProblem + 1);
  }

  return res === Number.MAX_VALUE ? -1 : res;
};

// 带备忘录的递归
export const coinChange2: CoinChange = (coins, amount) => {
  const memo = new Array(amount + 1).fill(-666);
  // 备忘录初始化为一个不会被取到的特殊值，代表还未被计算
  const dp: CoinChange = (coins, amount) => {
    if (amount == 0) return 0;
    if (amount < 0) return -1;
    // 查备忘录，防止重复计算
    if (memo[amount] != -666) return memo[amount];

    let res = Infinity;
    for (let coin of coins) {
      // 计算子问题的结果
      let subProblem = dp(coins, amount - coin);

      // 子问题无解则跳过
      if (subProblem == -1) continue;
      // 在子问题中选择最优解，然后加一
      res = Math.min(res, subProblem + 1);
    }
    memo[amount] = res == Infinity ? -1 : res;
    return memo[amount];
  };

  return dp(coins, amount);
};

// dp 数组的迭代解法
export const coinChange3: CoinChange = (coins, amount) => {
  // 数组大小为 amount + 1
  let dp = Array(amount + 1).fill(Number.MAX_VALUE);

  // base case
  dp[0] = 0;

  for (let i = 0; i < dp.length; i++) {
    for (const coin of coins) {
      // 子问题无解，跳过
      if (i - coin < 0) continue;

      dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
    }
  }

  return dp[amount] === Number.MAX_VALUE ? -1 : dp[amount];
};
