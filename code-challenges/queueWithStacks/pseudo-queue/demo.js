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

}

push(value){
  //if top is null current node is top
  let node = new Node(value)
    let top = null;
  if(!this.top){
    this.top= node;
    top = this.top;
    this.count ++;
    return;
  }
  let last = node;
  last.prev = top;
  top = last;
  this.count++;
//   console.log({prev: top.prev.value})
}

pop(){
    let off = this.top;
    this.top = this.top.prev;

  this.count --;
  return off;

}
peek(){
//   return {value: this.top.value, length: this.count};
return this.top.value;
}
}

let stack = new Stack();
// stack.push(1);
// console.log(stack.peek());

// stack.push(2);
// stack.push(3);
// stack.push(4);
// stack.push(5);
// console.log(stack.top.prev)
// console.log(stack.peek());
// stack.pop();
// stack.pop();
// // stack.push(8)
// console.log(stack.peek());

for(let i = 1; i <=5; i++){
stack.push(i);
// console.log(stack.peek());

}
console.log(stack.peek());


while(stack.pop() !==null){

stack.pop();
console.log(stack.peek());

}
