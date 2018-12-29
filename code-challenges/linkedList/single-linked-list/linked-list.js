const util = require('util');

// module.exports = {Node, LinkedList};


console.log('hooked up')
class Node {
    constructor(value){

        this.value = value;
        this.next = null;
    }
}


class LinkedList{
    constructor(){
        this.head = null;
    }
    add(value){
        let node = new Node(value);

        if(!this.head){
        this.head = node;
        return;
        }

        let current = this.head;
        while(current.next){
            //do stuff
            current = current.next;
        }
        current.next = node;
    }
    insert(value){
        let node = new Node(value);
        node.next = this.head;
        this.head = node;
        }

    includes(target){
        let current = this.head;
        let value = current.value;
        while(current.next){
            if(target === value){
                // target = true;
                break;
            }
            current = current.next;
        }
        if(target ===value){
            return true;
        }
        else{
            return false;
        }
    }
    print(){
        let current = this.head;
        while(current.next){
            console.log(current.value);
            current = current.next;
        }
    }

    append(value){
        let current = this.head;
        while(current.next){
            current = current.next;
        }
        let newNode = new Node(value)
        current.next = newNode;
        newNode.next = null;

    }
    insertAfter(value, newValue){
        let current = this.head;
        while(current.next){
          
            if(current.value === value){
            //   console.log('entered')
                break;
            }
            current = current.next;
        }
        if(current.next ===null){
            console.log('value not found')
        }
        else{
            let newNode = new Node(newValue);
            newNode.next = current.next;
            current.next = newNode;
        }

    }
    insertBefore(value, newValue){
        let current = this.head;
        while(current.next){
          
            if(current.next.value === value){
              console.log('entered')
                break;
            }
            current = current.next;
        }
        if(current.next ===null){
                console.log('value not found')
            }
            else{
                let newNode = new Node(newValue);
                newNode.next = current.next;
                current.next = newNode;
            }
    }
    getValue(k){
        let current = this.head;
        let length = 0;
        while(current.next){
            length ++;
            current = current.next;
        };
        let target = length - k;
        current = this.head;
        let cnt = 0;
        while(cnt < target){
            current = current.next;
            cnt ++;
        }
        return current.next.value
    }
}

let list = new LinkedList();
list.add('James');
list.add('cathy');
list.add('Zach');
list.add('3');
list.add(5);

console.log(list.getValue(3));

// console.log(list.includes('John'));
// list.insertBefore('cathy', 7)
    console.log(list);

    module.exports = {LinkedList,Node};