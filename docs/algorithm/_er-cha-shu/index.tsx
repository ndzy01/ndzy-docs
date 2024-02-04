/**
 * title: 二叉树
 * iframe: true
 */
import React from 'react';
import IApp from '../_components/App';
import { diameterOfBinaryTree1, diameterOfBinaryTree2 } from './diameterOfBinaryTree.ts';
import { maxDepth1, maxDepth2 } from './maxDepth';

const anchorList = [
  {
    key: 'img1',
    href: '#img1',
    title: '前序，中序，后序',
    img: 'https://cdn.jsdelivr.net/gh/ndzy01/img/NDZY_212a825d-9b21-4f89-9717-48207eb69df5_img-17.jpg',
  },
  {
    key: 'img2',
    href: '#img2',
    title: '二叉树的最大深度',
    img: 'https://cdn.jsdelivr.net/gh/ndzy01/img/NDZY_0db39814-3ff9-4180-8945-f9668a12fd43_img-18.jpg',
  },
  {
    key: 'img3',
    href: '#img3',
    title: '二叉树的直径',
    img: 'https://cdn.jsdelivr.net/gh/ndzy01/img/NDZY_67bb9576-0855-439b-9ea9-0c52db7ff2f2_img-19.png',
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
  maxDepth1(new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7))));
  maxDepth2(new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7))));
  diameterOfBinaryTree1(
    new TreeNode(9, null, new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3))),
  );
  diameterOfBinaryTree2(
    new TreeNode(9, null, new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3))),
  );

  return <IApp anchorList={anchorList} />;
};

export default App;
