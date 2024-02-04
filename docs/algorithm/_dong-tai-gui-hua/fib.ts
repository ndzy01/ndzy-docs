// 斐波拉契数列

type Fib = (n: number) => number;

// 自顶向下 递归求解
export const fib1: Fib = (n) => {
  // base case
  if (n === 1 || n === 2) return 1;

  return fib1(n - 1) + fib1(n - 2);
};

// 自顶向下 递归求解
// 备忘录
export const fib2: Fib = (n) => db(Array(n + 1).fill(0), n);

const db: (memo: number[], n: number) => number = (memo, n) => {
  // base case
  if (n === 0 || n === 1) return n;

  // 已经计算过，不要再计算了
  if (memo[n] != 0) return memo[n];

  memo[n] = db(memo, n - 1) + db(memo, n - 2);

  return memo[n];
};

// 自低向上 循环迭代
// db 数组的迭代解法
export const fib3: Fib = (n) => {
  if (n === 0) return 0;

  const dp = Array(n + 1).fill(0);

  // base case
  dp[0] = 0;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    // 状态转移方程
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
};

// 优化 db 数组的迭代解法
export const fib4: Fib = (n) => {
  // base case
  if (n === 0 || n === 1) return n;

  let dp1 = 1,
    dp2 = 1;

  for (let i = 2; i <= n; i++) {
    // 状态转移方程
    const dp = dp1 + dp2;

    // 滚动更新
    dp2 = dp1;
    dp1 = dp;
  }

  return dp1;
};
