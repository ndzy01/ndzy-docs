// 层序遍历

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

type LevelTraverse = (root: TreeNode) => number[][] | undefined;

const levelTraverse1: LevelTraverse = (root) => {
  if (root === null) return;
  let res: number[][] = [];
  const q: TreeNode[] = [];
  q.push(root);

  // 从上到下遍历二叉树的每一层
  while (!(q.length === 0)) {
    const nodeValues: number[] = [];
    const sz = q.length;
    // 从左到右遍历每一层的每个节点
    for (let i = 0; i < sz; i++) {
      const cur: any = q.pop();
      nodeValues.push(cur.val);
      // 将下一层节点放入队列
      if (cur.left !== null) {
        q.push(cur.left);
      }
      if (cur.right !== null) {
        q.push(cur.right);
      }
    }

    res.push(nodeValues);
  }

  return res;
};

const levelTraverse2: LevelTraverse = (root) => {
  const res: number[][] = [];
  if (root == null) {
    return res;
  }
  const nodes: TreeNode[] = [];
  nodes.push(root);
  traverse(nodes);
  return res;

  function traverse(curLevelNodes: TreeNode[]) {
    if (curLevelNodes.length === 0) {
      return;
    }
    // 前序位置，计算当前层的值和下一层的节点列表
    const nodeValues: number[] = [];
    const nextLevelNodes: TreeNode[] = [];
    for (let i = 0; i < curLevelNodes.length; i++) {
      const node = curLevelNodes[i];
      nodeValues.push(node.val);
      if (node.left != null) {
        nextLevelNodes.push(node.left);
      }
      if (node.right != null) {
        nextLevelNodes.push(node.right);
      }
    }
    // 前序位置添加结果，可以得到自顶向下的层序遍历
    // res.push(nodeValues);
    traverse(nextLevelNodes);
    // 后序位置添加结果，可以得到自底向上的层序遍历结果
    res.push(nodeValues);
  }
};

const res2 = levelTraverse2(
  new TreeNode(9, null, new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3))),
);

console.log('ndzy---log---ndzy', res2, '------');
// [ [ 9 ], [ 1 ], [ 2, 3 ], [ 4, 5 ] ]
// [ [ 4, 5 ], [ 2, 3 ], [ 1 ], [ 9 ] ]

const res1 = levelTraverse1(
  new TreeNode(9, null, new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3))),
);
console.log('ndzy---log---ndzy', res1, '------');
