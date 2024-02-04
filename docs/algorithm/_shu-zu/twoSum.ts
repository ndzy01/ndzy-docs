// 两数之和

type TwoSum = (nums: number[], target: number) => number[];

export const twoSum: TwoSum = (nums, target) => {
  let left = 0,
    right = nums.length - 1;

  while (left < right) {
    let sum = nums[left] + nums[right];

    if (sum === target) {
      // 题目索引是从 1 开始的，且只会有一个答案
      return [left + 1, right + 1];
    } else if (sum < target) {
      left++;
    } else if (sum > target) {
      right--;
    }
  }

  return [];
};
