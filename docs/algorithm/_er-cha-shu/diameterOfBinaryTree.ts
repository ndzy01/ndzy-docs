// 二叉树的直径

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

type DiameterOfBinaryTree = (root: TreeNode) => number;

// O(n*n)
export const diameterOfBinaryTree1: DiameterOfBinaryTree = (root) => {
  let maxDiameter = 0;

  // 遍历二叉树
  const traverse = function (node: any) {
    if (node == null) {
      return 0;
    }
    // 对每个节点计算直径
    const leftMax = maxDepth(node.left);
    const rightMax = maxDepth(node.right);
    const myDiameter = leftMax + rightMax;
    // 更新全局最大直径
    maxDiameter = Math.max(maxDiameter, myDiameter);
    // 递归遍历左子树
    traverse(node.left);
    // 递归遍历右子树
    traverse(node.right);
  };

  // 计算二叉树的最大深度
  const maxDepth = function (node: any) {
    if (node == null) {
      return 0;
    }
    // 计算左右子树最大深度
    const leftMax = maxDepth(node.left);
    const rightMax = maxDepth(node.right);
    return 1 + Math.max(leftMax, rightMax);
  };

  // 对每个节点计算直径，求最大直径
  traverse(root);
  return maxDiameter;
};

// O(n)
export const diameterOfBinaryTree2: DiameterOfBinaryTree = (root) => {
  let maxDiameter = 0;

  const maxDepth = function (root: any) {
    if (root === null) {
      return 0;
    }
    const leftMax = maxDepth(root.left);
    const rightMax = maxDepth(root.right);
    // 后序位置，顺便计算最大直径
    maxDiameter = Math.max(maxDiameter, leftMax + rightMax);
    return 1 + Math.max(leftMax, rightMax);
  };

  maxDepth(root);
  return maxDiameter;
};
