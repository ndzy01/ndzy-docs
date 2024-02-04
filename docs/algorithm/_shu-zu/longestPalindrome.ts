// 最长回文子串

type Palindrome = (s: string, l: number, r: number) => string;

// 在 s 中寻找以 s[l] 和 s[r] 为中心的最长回文串
const palindrome: Palindrome = (s, l, r) => {
  while (l >= 0 && r < s.length && s.charAt(l) === s.charAt(r)) {
    l--;
    r++;
  }

  // 返回以 s[l] 和 s[r] 为中心的最长回文串
  return s.substring(l + 1, r);
};

type LongestPalindrome = (s: string) => string;

export const longestPalindrome: LongestPalindrome = (s) => {
  let res = '';

  for (let i = 0; i < s.length; i++) {
    const s1 = palindrome(s, i, i);
    const s2 = palindrome(s, i, i + 1);

    // res 为 res s1 s2 中最大值
    res = res.length > s1.length ? res : s1;
    res = res.length > s2.length ? res : s2;
  }

  return res;
};
