// 单链表是否成环

class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

type HasCycle = (head: ListNode) => boolean;

export const hasCycle: HasCycle = (head) => {
  // 快慢指针初始化指向 head
  let slow = head,
    fast = head;

  // 快指针走到末尾时停止
  while (fast != null && fast.next != null) {
    // 慢指针走一步，快指针走两步
    slow = slow.next as ListNode;
    fast = fast.next.next as ListNode;

    // 快慢指针相遇，说明有环
    if (slow == fast) {
      return true;
    }
  }

  // 不包含环
  return false;
};
