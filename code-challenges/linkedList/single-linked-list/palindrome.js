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
list.add('r');
list.add('a');
list.add('c');
list.add('e');
list.add('c');
list.add('a');
list.add('r');

function valPal(list1){
    let cur = list1.head;
    let count = 0;
    let arr =[];
    let result = true;
   
    while(cur.next){
        // console.log(cur.value)
        arr[count] = cur.value;
        count ++;
        cur=cur.next;
    }
    let len = count+1;
    arr[count]=cur.value;

    // console.log(len%2)

    if(len%2 == 0){
        for(let i =0; i<len/2; i++){
            console.log(arr[i])

            if(arr[i] !== arr[(len-1)-i]){
                
                result = false;
            }


        }
    }
    else if(len%2 !== 0){
        for(let i =0; i<Math.floor(len/2); i++){

            if(arr[i] !== arr[(len-1)-i]){
                console.log(arr[i])
                result= false;
            }

        }
    }
return result;
    
}


let x =valPal(list)

    console.log(x);
