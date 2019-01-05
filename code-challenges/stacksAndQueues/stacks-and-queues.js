const util = require('util');


class Node {
    constructor(value){

        this.value = value;
        this.prev = null;
    }
}


class Stack{
constructor (node){
  this.top = null;;
  // this.node.next = null
}

push(value){
  //if top is null current node is top
  let node = new Node(value)

  if(!this.top){
    this.top= node;
    return;
  }
  let current = node;
  node.prev = this.top;//points at top
  this.top = current;
}

pop(){
  let last = this.top.value;
  this.top = this.top.prev;
  return last;

}
peek(){
  return this.top.value;
}
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
// console.log(stack.top.prev)
console.log(stack.peek());
stack.pop();
stack.pop();
stack.push(8)
console.log(stack.peek());

