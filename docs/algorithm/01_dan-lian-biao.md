---
title: 单链表
order: 1001
---

<TOC></TOC>

<code src="./_dan-lian-biao/index.tsx"></code>

## 例题

### 合并两个有序链表

> `dummy` 虚拟头节点：当需要创造一条新链表的时候，可以使用虚拟头节点简化边界情况处理

<L name="合并两个有序链表" src="https://leetcode.cn/problems/merge-two-sorted-lists/"></L>

### 单链表的分解

<L name="分隔链表" src="https://leetcode.cn/problems/partition-list/"></L>

### 合并 k 个有序链表

<L name="合并 K 个升序链表" src="https://leetcode.cn/problems/merge-k-sorted-lists/"></L>

### 单链表的倒数第 k 个节点

> 技巧：使用双指针 p1，p2，p1 先走 k 步，此时 p2 从头同步和 p1 向前走 n-k 步，此 p2 指向倒数第 k 个节点

<L name="删除链表的倒数第 N 个结点" src="https://leetcode.cn/problems/remove-nth-node-from-end-of-list/"></L>

### 单链表中点

> 技巧：每当慢指针 slow 向前一步，快指针就向前两步，这样，当 fast 走到链表末尾时，slow 就指向了链表中点

<L name="链表的中间结点" src="https://leetcode.cn/problems/middle-of-the-linked-list/"></L>

### 单链表是否成环

> 技巧：每当慢指针 slow 向前一步，快指针就向前两步，这样，当 fast 最终遇到 null 则无环，fast，slow 相遇则说明有环

### 单链表环起点

<L name="环形链表起点" src="https://leetcode.cn/problems/linked-list-cycle-ii/"></L>

<L name="题解" src="https://labuladong.github.io/algo/di-ling-zh-bfe1b/shuang-zhi-0f7cc/#%E5%88%A4%E6%96%AD%E9%93%BE%E8%A1%A8%E6%98%AF%E5%90%A6%E5%8C%85%E5%90%AB%E7%8E%AF"></L>

### 相交链表

<L name="相交链表" src="https://leetcode.cn/problems/intersection-of-two-linked-lists/"></L>

<L name="题解" src="https://labuladong.github.io/algo/di-ling-zh-bfe1b/shuang-zhi-0f7cc/#%E4%B8%A4%E4%B8%AA%E9%93%BE%E8%A1%A8%E6%98%AF%E5%90%A6%E7%9B%B8%E4%BA%A4"></L>
