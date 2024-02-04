// 单链表环起点

class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

type DetectCycle = (head: ListNode) => ListNode | null;

export const detectCycle: DetectCycle = (head) => {
  // 快慢指针初始化指向 head
  let slow = head,
    fast = head;

  // 快指针走到末尾时停止
  while (fast != null && fast.next != null) {
    // 慢指针走一步，快指针走两步
    slow = slow.next as ListNode;
    fast = fast.next.next as ListNode;

    // 快慢指针相遇，说明有环
    if (slow == fast) break;
  }

  if (fast == null || fast.next == null) {
    // fast 遇到空指针说明没有环
    return null;
  }

  // 重新指向头节点
  slow = head;

  // 快慢指针同步前进，相交点就是环起点
  while (slow != fast) {
    fast = fast.next as ListNode;
    slow = slow.next as ListNode;
  }

  return slow;
};
