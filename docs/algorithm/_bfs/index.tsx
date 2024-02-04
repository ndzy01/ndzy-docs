/**
 * title: bfs
 * iframe: true
 */

import React from 'react';
import IApp from '../_components/App';
import { minDepth } from './minDepth';

const anchorList = [
  {
    key: 'img1',
    href: '#img1',
    title: '二叉树的最小深度',
    img: 'https://cdn.jsdelivr.net/gh/ndzy01/img/NDZY_18518d85-a51c-45cf-8e8b-6fd209c1bfb0_img-25.png',
  },
];

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
const App = () => {
  // 二叉树的最小深度
  minDepth(new TreeNode(1));

  return <IApp anchorList={anchorList} />;
};

export default App;
