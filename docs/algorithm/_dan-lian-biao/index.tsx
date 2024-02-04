/**
 * title: 单链表
 * iframe: true
 */
import React from 'react';
import IApp from '../_components/App';
import { detectCycle } from './detectCycle';
import { findFromEnd } from './findFromEnd';
import { getIntersectionNode } from './getIntersectionNode';
import { hasCycle } from './hasCycle';
import { mergeKLists } from './mergeKLists';
import { mergeTwoLists } from './mergeTwoLists';
import { middleNode } from './middleNode';
import { partition } from './partition';
import { removeNthFromEnd } from './removeNthFromEnd';

const anchorList = [
  {
    key: 'img1',
    href: '#img1',
    title: '合并两个有序链表',
    img: 'https://cdn.jsdelivr.net/gh/ndzy01/img/NDZY_5bc7bee3-7ab5-4d35-b229-725533276082_img-3.jpg',
  },
  {
    key: 'img2',
    href: '#img2',
    title: '分隔链表',
    img: 'https://cdn.jsdelivr.net/gh/ndzy01/img/NDZY_a092b9cb-f93d-4700-a151-50270e9ca818_img-4.jpg',
  },
  {
    key: 'img3',
    href: '#img3',
    title: '合并 K 个升序链表',
    img: 'https://cdn.jsdelivr.net/gh/ndzy01/img/NDZY_589cb1c2-efdc-42a9-958e-9e422b1a26ac_img-7.png',
  },
  {
    key: 'img4',
    href: '#img4',
    title: '删除链表的倒数第 N 个结点',
    img: 'https://cdn.jsdelivr.net/gh/ndzy01/img/NDZY_758572ce-57eb-490b-affe-8ebcb485518d_img-5.jpg',
  },
  {
    key: 'img5',
    href: '#img5',
    title: '链表的中间结点',
    img: 'https://cdn.jsdelivr.net/gh/ndzy01/img/NDZY_8846de0a-54e1-42b9-97a4-326bb1dd72e0_img-6.jpg',
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
  // 合并两个有序链表
  mergeTwoLists(new ListNode(1, new ListNode(2, new ListNode(4))), new ListNode(1, new ListNode(3, new ListNode(4))));

  // 分隔链表
  partition(new ListNode(1, new ListNode(4, new ListNode(3, new ListNode(2, new ListNode(5, new ListNode(2)))))), 3);

  // 合并 K 个升序链表
  mergeKLists([
    new ListNode(1, new ListNode(4, new ListNode(5))),
    new ListNode(1, new ListNode(3, new ListNode(4))),
    new ListNode(2, new ListNode(6)),
  ]);

  // 倒数第 k 个节点
  findFromEnd(
    new ListNode(
      8,
      new ListNode(
        1,
        new ListNode(4, new ListNode(7, new ListNode(3, new ListNode(2, new ListNode(5, new ListNode(2)))))),
      ),
    ),
    4,
  );

  // 删除链表的倒数第 N 个结点
  removeNthFromEnd(
    new ListNode(
      8,
      new ListNode(
        1,
        new ListNode(4, new ListNode(7, new ListNode(3, new ListNode(2, new ListNode(5, new ListNode(2)))))),
      ),
    ),
    4,
  );

  // 单链表中点
  middleNode(
    new ListNode(
      8,
      new ListNode(
        1,
        new ListNode(4, new ListNode(7, new ListNode(3, new ListNode(2, new ListNode(5, new ListNode(2)))))),
      ),
    ),
  );

  // 单链表是否成环
  hasCycle(
    new ListNode(
      8,
      new ListNode(
        1,
        new ListNode(4, new ListNode(7, new ListNode(3, new ListNode(2, new ListNode(5, new ListNode(2)))))),
      ),
    ),
  );

  // 单链表环起点
  detectCycle(
    new ListNode(
      8,
      new ListNode(
        1,
        new ListNode(4, new ListNode(7, new ListNode(3, new ListNode(2, new ListNode(5, new ListNode(2)))))),
      ),
    ),
  );

  // 相交链表
  getIntersectionNode(
    new ListNode(
      8,
      new ListNode(
        1,
        new ListNode(4, new ListNode(7, new ListNode(3, new ListNode(2, new ListNode(5, new ListNode(2)))))),
      ),
    ),
    new ListNode(
      8,
      new ListNode(
        1,
        new ListNode(4, new ListNode(7, new ListNode(3, new ListNode(2, new ListNode(5, new ListNode(2)))))),
      ),
    ),
  );

  return <IApp anchorList={anchorList} />;
};

export default App;
