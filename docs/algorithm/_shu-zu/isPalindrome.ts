// 回文串判断

type IsPalindrome = (s: string) => boolean;

export const isPalindrome: IsPalindrome = (s) => {
  // 一左一右两个指针相向而行
  let left = 0,
    right = s.length - 1;

  while (left < right) {
    if (s.charAt(left) !== s.charAt(right)) {
      return false;
    }

    left++;
    right--;
  }

  return true;
};
