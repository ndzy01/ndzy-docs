// 删除链表的倒数第 N 个结点

class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

type FindFromEnd = (head: ListNode, k: number) => ListNode;
type RemoveNthFromEnd = (head: ListNode | null, n: number) => ListNode | null;

const findFromEnd: FindFromEnd = (head, k) => {
  let p1 = head;

  // p1 先走 k 步
  for (let i = 0; i < k; i++) {
    p1 = p1.next as ListNode;
  }

  let p2 = head;

  // p1 和 p2 同时走 n-k 步
  while (p1 != null) {
    p2 = p2.next as ListNode;
    p1 = p1.next as ListNode;
  }

  // p2 现在指向第 n-k+1 个节点，即倒数第 k 个节点
  return p2;
};

export const removeNthFromEnd: RemoveNthFromEnd = (head, n) => {
  // 虚拟头结点
  const dummy = new ListNode(-1);

  dummy.next = head;

  // 删除倒数第 n 个，要先找倒数第 n+1 个节点
  const x: ListNode = findFromEnd(dummy, n + 1);

  // 删掉倒数第 n 个节点
  x.next = (x.next as ListNode).next;

  return dummy.next;
};
