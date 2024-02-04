// 移动零

type RemoveElement = (nums: number[], val: number) => number;

const removeElement: RemoveElement = (nums, val) => {
  if (nums.length === 0) {
    return 0;
  }

  let slow = 0,
    fast = 0;

  while (fast < nums.length) {
    if (nums[fast] !== val) {
      nums[slow] = nums[fast];
      slow++;
    }

    fast++;
  }

  return slow;
};

type MoveZeroes = (nums: number[]) => number[];

export const moveZeroes: MoveZeroes = (nums) => {
  let p = removeElement(nums, 0);

  for (; p < nums.length; p++) {
    nums[p] = 0;
  }

  return nums;
};
