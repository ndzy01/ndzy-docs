// 移除元素

type RemoveElement = (nums: number[], val: number) => number;

export const removeElement: RemoveElement = (nums, val) => {
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

const res = removeElement([1, 1, 1, 2, 3, 3, 89], 3);

console.log('ndzy---log---ndzy', res, '------');
// res 5; nums [1, 1, 1, 2, 89, 3, 89]
