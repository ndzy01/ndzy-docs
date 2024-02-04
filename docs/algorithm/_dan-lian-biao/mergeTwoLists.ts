// 合并两个有序链表

class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

type MergeTwoLists = (l1: ListNode | null, l2: ListNode | null) => ListNode | null;

export const mergeTwoLists: MergeTwoLists = (l1, l2) => {
  // 构建虚拟根节点
  const dummy = new ListNode(-1);
  let p: any = dummy;
  let p1 = l1;
  let p2 = l2;

  while (p1 != null && p2 != null) {
    if (p1.val > p2.val) {
      p.next = p2;

      // p2 前进
      p2 = p2.next;
    } else {
      p.next = p1;

      // p1 前进
      p1 = p1.next;
    }

    // p 指针前进
    p = p.next;
  }

  if (p1 !== null) {
    p.next = p1;
  }

  if (p2 !== null) {
    p.next = p2;
  }

  return dummy.next;
};

const res = mergeTwoLists(
  new ListNode(1, new ListNode(2, new ListNode(4))),
  new ListNode(1, new ListNode(3, new ListNode(4))),
);

console.log('ndzy---log---ndzy', JSON.stringify(res), '------');
