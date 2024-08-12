// 2. 单链表反转
// 题目: 反转一个单链表。
// 例子: 输入链表 1 -> 2 -> 3 -> 4 -> 5，输出链表 5 -> 4 -> 3 -> 2 -> 1。

class LinkList {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

const node = new LinkList(1);
node.next = new LinkList(2);
node.next.next = new LinkList(3);
node.next.next.next = new LinkList(4);
node.next.next.next.next = new LinkList(5);

function reverse(node){
   let prev = null;
   let curr = node;

   while(curr !== null){
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
   }

   return prev;
}

function printLink(node){
    while(node !== null){
        console.log(node.value);
        node = node.next;
    }
}

printLink(reverse(node));