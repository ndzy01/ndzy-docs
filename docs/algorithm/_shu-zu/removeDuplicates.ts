// 删除有序数组中的重复项

type RemoveDuplicates = (nums: number[]) => number;

export const removeDuplicates: RemoveDuplicates = (nums) => {
  if (nums.length === 0) {
    return 0;
  }

  let slow = 0,
    fast = 0;

  while (fast < nums.length) {
    if (nums[fast] !== nums[slow]) {
      slow++;

      nums[slow] = nums[fast];
    }

    fast++;
  }

  return slow + 1;
};

const res = removeDuplicates([1, 1, 1, 2, 3, 3, 89]);

console.log('ndzy---log---ndzy', res, '------');
// res 4; nums [1, 2, 3, 89, 3, 3, 89]
