// 反转字符串

type ReverseString = (s: string[]) => string[];

export const reverseString: ReverseString = (s) => {
  // 一左一右两个指针相向而行
  let left = 0,
    right = s.length - 1;

  while (left < right) {
    // 交换 s[left] 和 s[right]
    let temp = s[left];

    s[left] = s[right];
    s[right] = temp;

    left++;
    right--;
  }

  return s;
};
