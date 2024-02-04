// 二分查找

type BinarySearch = (nums: number[], target: number) => number;

export const binarySearch: BinarySearch = (nums, target) => {
  let left = 0,
    right = nums.length - 1;

  if (target < nums[left] || target > nums[right]) {
    return -1;
  }

  while (left <= right) {
    // 向上取整
    let mid = Math.ceil((right + left) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    }
  }

  return -1;
};
