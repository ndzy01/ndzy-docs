// 二叉树的最小深度
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

type MinDepth = (root: TreeNode) => number;

export const minDepth: MinDepth = (root) => {
  if (!root) {
    return 0;
  }
  const q = [root];
  let depth = 1;
  while (q.length > 0) {
    const size = q.length;
    /* 将当前队列中的所有节点向四周扩散 */
    for (let i = 0; i < size; i++) {
      const cur: any = q.shift();
      /* 判断是否到达终点 */
      if (cur.left === null && cur.right === null) {
        return depth;
      }
      /* 将 cur 的相邻节点加入队列 */
      if (cur.left !== null) {
        q.push(cur.left);
      }
      if (cur.right !== null) {
        q.push(cur.right);
      }
    }
    /* 这里增加步数 */
    depth++;
  }
  return depth;
};
