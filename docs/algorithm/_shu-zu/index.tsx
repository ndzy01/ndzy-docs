/**
 * title: 数组
 * iframe: true
 */

import React from 'react';
import IApp from '../_components/App';
import { binarySearch } from './binarySearch';
import { deleteDuplicates } from './deleteDuplicates';
import { isPalindrome } from './isPalindrome';
import { longestPalindrome } from './longestPalindrome';
import { moveZeroes } from './moveZeroes';
import { removeDuplicates } from './removeDuplicates';
import { removeElement } from './removeElement';
import { reverseString } from './reverseString';
import { twoSum } from './twoSum';

const anchorList = [
  {
    key: 'img1',
    href: '#img1',
    title: '删除有序数组中的重复项',
    img: 'https://cdn.jsdelivr.net/gh/ndzy01/img/NDZY_eaf87a4d-81a1-4f78-b47f-d5f54e333ad3_img-13.jpg',
  },
  {
    key: 'img2',
    href: '#img2',
    title: '删除排序链表中的重复元素',
    img: 'https://cdn.jsdelivr.net/gh/ndzy01/img/NDZY_e61b9f0e-d207-4b05-acd7-80928a5708cb_img-10.jpg',
  },
  {
    key: 'img3',
    href: '#img3',
    title: '移除元素',
    img: 'https://cdn.jsdelivr.net/gh/ndzy01/img/NDZY_5758f2bd-fd01-42bf-a9cc-9a7da5ad2fa1_img-14.jpg',
  },
  {
    key: 'img4',
    href: '#img4',
    title: '移动零',
    img: 'https://cdn.jsdelivr.net/gh/ndzy01/img/NDZY_07e3465c-b416-485a-9000-d6941076af29_img-12.jpg',
  },
  {
    key: 'img5',
    href: '#img5',
    title: '两数之和',
    img: 'https://cdn.jsdelivr.net/gh/ndzy01/img/NDZY_0061a7c6-22e9-40bc-a3eb-71922a1ad1f4_img-16.jpg',
  },
  {
    key: 'img6',
    href: '#img6',
    title: '反转字符串',
    img: 'https://cdn.jsdelivr.net/gh/ndzy01/img/NDZY_6853ddb7-a4bb-4661-88a3-aeb6041980c8_img-15.jpg',
  },
  {
    key: 'img7',
    href: '#img7',
    title: '最长回文子串',
    img: 'https://cdn.jsdelivr.net/gh/ndzy01/img/NDZY_9a554134-c26e-46d2-a3c2-0476a2ac02a0_img-11.jpg',
  },
];

class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const App = () => {
  // 删除有序数组中的重复项
  removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);

  // 删除排序链表中的重复元素
  deleteDuplicates(new ListNode(1, new ListNode(2, new ListNode(2))));

  // 移除元素
  removeElement([3, 2, 2, 3], 2);

  // 移动零
  moveZeroes([0, 1, 0, 3, 12]);

  // 二分查找
  binarySearch([1, 2, 5, 7, 8, 9], 8);

  // 两数之和
  twoSum([2, 7, 11, 15], 9);

  // 反转字符串
  reverseString(['h', 'e', 'l', 'l', 'o']);

  // 回文串判断
  isPalindrome('abbac');

  // 最长回文子串
  longestPalindrome('babad');

  return <IApp anchorList={anchorList} />;
};

export default App;
