const util = require('util');

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
                target = true;
                break;
            }
            current = current.next;
        }
        if(target ===true){
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
}

let list = new LinkedList();
list.add('James');
list.add('cathy');
list.add('Zach');
list.add(4);
list.insert('John');
console.log(list.includes('John'));
list.print();

console.log(util.inspect(list,{depth:10}));