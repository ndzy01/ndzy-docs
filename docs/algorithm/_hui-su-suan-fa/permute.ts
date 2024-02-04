// 全排列

type Permute = (nums: number[]) => number[][];

export const permute: Permute = (nums) => {
  const res: number[][] = [];
  const track: number[] = [];
  const used: boolean[] = new Array(nums.length).fill(false);

  const backtrack = function (nums: number[], track: number[], used: boolean[]) {
    if (track.length === nums.length) {
      res.push([...track]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) {
        // nums[i] 已经在 track 中，跳过
        continue;
      }
      // 做选择
      track.push(nums[i]);
      used[i] = true;
      backtrack(nums, track, used);
      // 取消选择
      track.pop();
      used[i] = false;
    }
  };

  backtrack(nums, track, used);
  return res;
};

console.log(permute([1, 2, 3]));
