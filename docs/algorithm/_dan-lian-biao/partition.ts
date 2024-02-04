// 分隔链表

class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

type Partition = (head: ListNode | null, x: number) => ListNode | null;

export const partition: Partition = (head, x) => {
  // 存放小于 x 的链表的虚拟头节点
  const dummy1 = new ListNode(-1);
  // 存放大于等于 x 的链表的虚拟头节点
  const dummy2 = new ListNode(-1);
  // p 负责遍历原链表
  let p = head;
  // p1,p2 负责生成结果链表
  let p1 = dummy1;
  let p2 = dummy2;

  while (p != null) {
    if (p.val >= x) {
      p2.next = p;
      p2 = p2.next;
    } else {
      p1.next = p;
      p1 = p1.next;
    }

    // 断开原链表中的每个节点的 next 指针
    const temp = p.next;
    p.next = null;
    p = temp;
  }

  // 连接两个链表
  p1.next = dummy2.next;

  return dummy1.next;
};
