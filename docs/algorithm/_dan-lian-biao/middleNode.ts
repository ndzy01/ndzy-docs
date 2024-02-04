// 单链表中点

class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

type MiddleNode = (head: ListNode) => ListNode;

export const middleNode: MiddleNode = (head) => {
  // 快慢指针初始化指向 head
  let slow = head,
    fast = head;

  // 快指针走到末尾时停止
  while (fast != null && fast.next != null) {
    // 慢指针走一步，快指针走两步
    slow = slow.next as ListNode;
    fast = fast.next.next as ListNode;
  }

  // 慢指针指向中点
  return slow;
};
