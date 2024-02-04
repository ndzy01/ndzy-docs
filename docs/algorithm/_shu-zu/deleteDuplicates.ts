// 删除排序链表中的重复元素

class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

type DeleteDuplicates = (head: ListNode | null) => ListNode | null;

export const deleteDuplicates: DeleteDuplicates = (head) => {
  if (head === null) {
    return null;
  }

  let slow = head,
    fast = head;

  while (fast != null) {
    if (fast.val !== slow.val) {
      slow.next = fast;
      slow = slow.next;
    }

    fast = fast.next as ListNode;
  }

  // 断开与后面重复元素的连接
  slow.next = null;

  return head;
};
