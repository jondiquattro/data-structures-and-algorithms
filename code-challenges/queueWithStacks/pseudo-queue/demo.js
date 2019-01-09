'use strict';
const util = require('util');


class Node {
    constructor(value){

        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class Stack{
constructor (node){
  this.top = null;
  this.count = 0;
  this.current = null;
}

push(value){
  //if top is null current node is top
  let node = new Node(value)
  
  if(!this.front){
    this.front= node;
    this.current = node;
    this.front.prev = this.current;

    return;
  }
  let prevNode = node;
  this.current.prev = node;
  this.current = prevNode;
  
  
  }
  
  pop(){
  let off = this.front.value;
  let current = this.front.prev;
    console.log(off)
  this.front = current;
  return off;
  
  }
peek(){
//   return {value: this.top.value, length: this.count};
return this.front.value;
}
}

let stack = new Stack();

for(let i = 1; i <=5; i++){
stack.push(i);
// console.log(stack.peek());

}
// console.log(stack.peek());

let newCount = 0;
while(stack.pop() !==null){
newCount ++;
// stack.pop()
console.log('count is ' ,newCount)

}

// console.log(stack.pop());s
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());



