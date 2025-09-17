---
title: "On Using Pointers: Algorithms"
date: "2025-06-07"
description: "Some techniques for two-pointer problems"
tags: ["algorithm"]
---

I keep revisiting algorithm problems and always see something new each time.

Over the weekend I picked a few pointer-related questions. I used Go, but the ideas are the same across languages.

## Merge Two Sorted Linked Lists

### Idea

The key detail is using a dummy node.

When merging two lists into a third one, we progressively take nodes from the two lists.
This is straightforward as long as we maintain pointers and compare values correctly.

The tricky part is the first node of the result list. When creating a new list, we don't know the first node's value ahead of time.
So we use a placeholder node (dummy). After finishing, we return `dummy.Next` as the real head.

### Code

```go
func mergeTwoLists(l1 *ListNode, l2 *ListNode) *ListNode {
    dummy := &ListNode{-1, nil}
    p := dummy
    p1 := l1
    p2 := l2

    for p1 != nil && p2 != nil {
        if p1.Val > p2.Val {
            p.Next = p2
            p2 = p2.Next
        } else {
            p.Next = p1
            p1 = p1.Next
        }
        p = p.Next
    }

    if p1 != nil {
        p.Next = p1
    }
    if p2 != nil {
        p.Next = p2
    }

    return dummy.Next
}
```

## Partition List

### Problem

Given the head of a linked list and a value x, partition it so that all nodes less than x come before nodes greater than or equal to x. Preserve original relative order.

### Idea

We still use dummy nodes and carefully maintain pointers, especially clearing the previous `next` when moving nodes.

### Code

```go
func partition(head *ListNode, x int) *ListNode {
    dummy1 := &ListNode{-1, nil}
    dummy2 := &ListNode{-1, nil}
    p1, p2 := dummy1, dummy2
    p := head
    for p != nil {
        if p.Val >= x {
            p2.Next = p
            p2 = p2.Next
        } else {
            p1.Next = p
            p1 = p1.Next
        }
        temp := p.Next
        p.Next = nil
        p = temp
    }
    p1.Next = dummy2.Next
    return dummy1.Next
}
```

## Merge k Sorted Lists

### Idea

Same logic as merging two lists, but we use a min-heap (priority queue) to always pull the smallest current node among the k lists.

### Code

```go
import "container/heap"

type PriorityQueue []*ListNode

func (pq PriorityQueue) Len() int { return len(pq) }
func (pq PriorityQueue) Less(i, j int) bool { return pq[i].Val < pq[j].Val }
func (pq PriorityQueue) Swap(i, j int) { pq[i], pq[j] = pq[j], pq[i] }
func (pq *PriorityQueue) Push(x interface{}) { *pq = append(*pq, x.(*ListNode)) }
func (pq *PriorityQueue) Pop() interface{} {
    old := *pq
    n := len(old)
    x := old[n-1]
    *pq = old[0 : n-1]
    return x
}

func mergeKLists(lists []*ListNode) *ListNode {
    if len(lists) == 0 {
        return nil
    }
    dummy := &ListNode{Val: -1}
    p := dummy

    pq := &PriorityQueue{}
    heap.Init(pq)

    for _, head := range lists {
        if head != nil {
            heap.Push(pq, head)
        }
    }

    for pq.Len() > 0 {
        node := heap.Pop(pq).(*ListNode)
        p.Next = node
        if node.Next != nil {
            heap.Push(pq, node.Next)
        }
        p = p.Next
    }
    return dummy.Next
}
```
