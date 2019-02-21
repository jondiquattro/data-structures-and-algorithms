'use strict';

class Node {
    constructor(value){
  
        this.value = value;
        this.prev = null;
        this.next = null;
    }
  }
  
  class StackClass{
  constructor (){
  this.prevPush = null;
  this.nextInLine = null;
  this.length =0;
  
  }
  
  push(value){
  //if top is null current node is top
  let node = new Node(value)
  
  if(!this.prevPush){
    
    this.prevPush = node;
    this.length ++;
    return;
  }
    let current = node;
    //sets previous item pushed to current item
    current.prev = this.prevPush;
    this.prevPush = current;
    this.length ++;
  }
  
  pop(){
  let off = this.prevPush;
  this.prevPush = this.prevPush.prev;
this.length --;
  return off;
  
  }
  peek(){
  this.prevPush;
  }
  }

  class QueueClass{
      constructor(){
        this.front = null;
        this.end = null;
        this.length = 0;
      }

      queue(value){
        let node = new Node(value);

        //makes a new node and points next at front so that when I pop front I can reset it to next
        if(!this.front){
            this.front = node;
            this.nextInLine = this.front;
            this.length ++;
            return;
        }
        //make a new node
        let current = node;
        this.nextInLine.prev = current;
        this.nextInLine = current;
        this.length ++;
      }
      dequeue(){
        let off = this.front;
        this.front = this.front.prev;
        this.length ++;
        return off;
      }
  }

  module.exports ={StackClass,QueueClass}