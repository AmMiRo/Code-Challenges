# Description

# You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

# You may assume the two numbers do not contain any leading zero, except the number 0 itself.

# Example 1:

# Input: l1 = [2,4,3], l2 = [5,6,4]
# Output: [7,0,8]
# Explanation: 342 + 465 = 807.

# Example 2:

# Input: l1 = [0], l2 = [0]
# Output: [0]

# Example 3:

# Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
# Output: [8,9,9,9,0,0,0,1]

# Constraints:

# The number of nodes in each linked list is in the range [1, 100].
# 0 <= Node.val <= 9
# It is guaranteed that the list represents a number that does not have leading zeros.



# Solution

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

# First Pass
class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:       
        linked_lists = [l1, l2]
        for i in range(len(linked_lists)):
            count = 1
            current = linked_lists[i]
            compiled_digits = 0
            while current is not None:
                compiled_digits += current.val * count
                count *= 10
                current = current.next
            linked_lists[i] = compiled_digits
        linked_lists[0] += linked_lists[1]
        num_str = str(linked_lists[0])
        new_head = None
        for char in num_str:
            node = ListNode(int(char), new_head)
            new_head = node
        return new_head