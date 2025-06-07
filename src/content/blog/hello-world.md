---
title: '关于指针使用的算法'
date: '2025-06-07'
description: '一些双指针的用法 '
tags: ['algorithm']
---

最近看了不少指针（双指针相关的算法） 
对于算法这块一起是常看常新的状态，每过一段时间感受就不一样了 
正逢周末，找了一些指针相关的算法题，语言用 go 其实不同的语言思路都是一样的 

## 双链表合并

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

## 单链表的分解

给你一个链表的头节点 head 和一个特定值 x ，请你对链表进行分隔，使得所有 小于 x 的节点都出现在 大于或等于 x 的节点之前。

你应当 保留 两个分区中每个节点的初始相对位置。

思路：
  这里还是需要使用 dummy
  同时还需注意指针的维护问题，每次在原链表上向后移动指针的使用需要注意把之前的指针清理掉


```go
func partition(head *ListNode, x int) *ListNode {
	// 存放小于 x 的链表的虚拟头结点
	dummy1 := &ListNode{-1, nil}
	// 存放大于等于 x 的链表的虚拟头结点
	dummy2 := &ListNode{-1, nil}
	// p1, p2 指针负责生成结果链表
	p1, p2 := dummy1, dummy2
	// p 负责遍历原链表，类似合并两个有序链表的逻辑
	// 这里是将一个链表分解成两个链表
	p := head
	for p != nil {
		if p.Val >= x {
			p2.Next = p
			p2 = p2.Next
		} else {
			p1.Next = p
			p1 = p1.Next
		}
		// 不能直接让 p 指针前进，
		// p = p.Next
		// 断开原链表中的每个节点的 next 指针
		temp := p.Next
		p.Next = nil
		p = temp
	}
	// 连接两个链表
	p1.Next = dummy2.Next

	return dummy1.Next
}
```

## 合并 k 个有序链表

给你一个链表数组，每个链表都已经按升序排列。

请你将所有链表合并到一个升序链表中，返回合并后的链表。

示例 1：

输入：lists = [[1,4,5],[1,3,4],[2,6]]
输出：[1,1,2,3,4,4,5,6]
解释：链表数组如下：
[
  1->4->5,
  1->3->4,
  2->6
]
将它们合并到一个有序链表中得到。
1->1->2->3->4->4->5->6
示例 2：

输入：lists = []
输出：[]
示例 3：

输入：lists = [[]]
输出：[]
提示：

k == lists.length
0 <= k <= 10^4
0 <= lists[i].length <= 500
-10^4 <= lists[i][j] <= 10^4
lists[i] 按 升序 排列
lists[i].length 的总和不超过 10^4

---

合并多个链表的逻辑跟合并两个没什么区别
子问题是要先找到所有的链表里面，多个链表的第一个节点里面最小的那个

核心的解决方案是使用优先级队列（最小堆），动态获取最小值，每次获取到最小值后，把当前 node 的下一个节点放在堆上


```go
import "container/heap"

// 为 ListNode 实现 heap.Interface 接口
type PriorityQueue []*ListNode

func (pq PriorityQueue) Len() int { return len(pq) }

func (pq PriorityQueue) Less(i, j int) bool {
    return pq[i].Val < pq[j].Val
}

func (pq PriorityQueue) Swap(i, j int) {
    pq[i], pq[j] = pq[j], pq[i]
}

func (pq *PriorityQueue) Push(x interface{}) {
    *pq = append(*pq, x.(*ListNode))
}

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

    // 虚拟头结点
    dummy := &ListNode{Val: -1}
    p := dummy

    // 优先级队列，最小堆
    pq := &PriorityQueue{}
    heap.Init(pq)

    // 将 k 个链表的头结点加入最小堆
    for _, head := range lists {
        if head != nil {
            heap.Push(pq, head)
        }
    }

    for pq.Len() > 0 {
        // 获取最小节点，接到结果链表中
        node := heap.Pop(pq).(*ListNode)
        p.Next = node
        if node.Next != nil {
            heap.Push(pq, node.Next)
        }
        // p 指针不断前进
        p = p.Next
    }
    return dummy.Next
}
```