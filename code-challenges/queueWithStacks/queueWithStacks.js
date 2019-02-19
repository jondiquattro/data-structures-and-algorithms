class Node {
  constructor(value){

      this.value = value;
      this.prev = null;
      // this.next = null;
  }
}

class Stack{
constructor (node){
this.front = null;;

}

push(value){
//if top is null current node is top
let node = new Node(value)

if(!this.front){
  this.front= node;
  let current = this.front;
  return;
}

let prevNode = node;
current.prev = node;
current = prevNode;


}

pop(){
let off = this.top;
console.log(this.top.prev.value)

return off;

}
peek(){
// return this.top.value;
}
}


class PsuedoQueue{

constructor(stack){
// console.log('called')
this.stack = stack;
}

enqueue(){
this.stack.push(4)
console.log(this.stack)
}
dequeue(){
let otherStack = new Stack();

while(!this.stack.pop()){
  console.log('called')
  otherStack.push(this.stack.pop())
}

let result = otherStack.pop()

while(!otherStack.pop()){
this.stack.push(otherStack.pop())

}
return result;
}

}//endfunction


let newStack = new Stack();
newStack.push(1)
newStack.push(2)
newStack.push(3)


let x =new PsuedoQueue(newStack);
x.dequeue(4);
