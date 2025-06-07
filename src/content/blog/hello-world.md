---
title: 'Hello World'
date: '2025-06-07'
description: '一些双指针的用法 '
tags: ['algorithm']
---

# 双链表合并

对于双链表合并的问题主要注意点是 dummy 节点的问题。
dummy 用来解决新链表的首节点空的一些问题 
其他的就是对两个链表的遍历，以及最后有节点遍历完了之后的收尾问题。
```go
func mergeTwoLists(l1 *ListNode, l2 *ListNode) *ListNode {
    // 虚拟头结点
    dummy := &ListNode{-1, nil}
    p := dummy
    p1 := l1
    p2 := l2
    
    for p1 != nil && p2 != nil {
        // 比较 p1 和 p2 两个指针
        // 将值较小的的节点接到 p 指针
        if p1.Val > p2.Val {
            p.Next = p2
            p2 = p2.Next
        } else {
            p.Next = p1
            p1 = p1.Next
        }
        // p 指针不断前进
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

## Features

- Written in Markdown
- Easy to edit
- Supports code blocks
- Supports images

## Code Example

```typescript
function hello() {
  console.log('Hello, World!');
}
```