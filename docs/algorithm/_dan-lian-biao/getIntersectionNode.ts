// 相交链表

class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

type getIntersectionNode = (headA: ListNode | null, headB: ListNode | null) => ListNode | null;

export const getIntersectionNode: getIntersectionNode = (headA, headB) => {
  // p1 指向 A 链表头结点，p2 指向 B 链表头结点
  let p1 = headA,
    p2 = headB;

  while (JSON.stringify(p1) != JSON.stringify(p2)) {
    // p1 走一步，如果走到 A 链表末尾，转到 B 链表
    if (p1 === null) {
      p1 = headB;
    } else {
      p1 = p1.next;
    }

    // p2 走一步，如果走到 B 链表末尾，转到 A 链表
    if (p2 == null) {
      p2 = headA;
    } else {
      p2 = p2.next;
    }
  }

  return p1;
};
