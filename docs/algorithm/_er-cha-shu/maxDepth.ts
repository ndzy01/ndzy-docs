// 二叉树的最大深度

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

type MaxDepth = (root: TreeNode | null) => number;

// 遍历思路
export const maxDepth1: MaxDepth = (root) => {
  // 记录最大深度
  let res = 0;
  // 记录遍历到的节点深度
  let depth = 0;

  const loop = (treeRoot: TreeNode | null) => {
    if (treeRoot === null) {
      return;
    }

    // 先序位置
    depth++;

    if (treeRoot.left === null && treeRoot.right === null) {
      // 到达叶子节点，更新最大深度
      res = Math.max(res, depth);
    }

    loop(treeRoot.left);
    loop(treeRoot.right);

    // 后序位置
    depth--;
  };

  loop(root);

  return res;
};

// 分解问题思路
export const maxDepth2: MaxDepth = (root) => {
  if (root === null) {
    return 0;
  }

  // 计算左,右子树的最大深度
  const leftMax = maxDepth2(root.left);
  const rightMax = maxDepth2(root.right);

  // 整棵树的最大深度等于左,右子树的最大深度取最大值
  // 最后再加上根节点自己
  const res: number = Math.max(leftMax, rightMax) + 1;

  return res;
};
