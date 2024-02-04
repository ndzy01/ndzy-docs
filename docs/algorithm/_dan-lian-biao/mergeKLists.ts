// 合并 K 个升序链表

class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

type MergeTwoLists = (l1: ListNode | null, l2: ListNode | null) => ListNode | null;
type MergeKLists = (lists: Array<ListNode | null>) => ListNode | null;

const mergeTwoLists: MergeTwoLists = (l1, l2) => {
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

export const mergeKLists: MergeKLists = (lists) => {
  if (lists.length === 0) {
    return null;
  }

  if (lists.length === 1) {
    return lists[0];
  }

  const dummy = new ListNode(-1);
  let p: any = dummy;

  for (let i = 0; i < lists.length; i++) {
    const ele = lists[i];

    if (i === 0) {
      p.next = mergeTwoLists(null, ele);
    } else {
      p.next = mergeTwoLists(p.next, ele);
    }

    // 指针向前
    p = p.next;
  }

  return dummy.next;
};
