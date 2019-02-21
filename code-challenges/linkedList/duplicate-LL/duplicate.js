const LinkedList = require('../single-linked-list/linked-list.js');

const Hash = require('../../hashtable/hashtable.js');


let list = new LinkedList();
list.add('4');
list.add('3');
list.add('7');
list.add('4');
list.add('6');


function duplicate(ll){
    let hash = new Hash(1024);

    let cur = ll.head;
    let prev = ll.head;

    while(cur.next){
        // console.log(cur.val)
        if(hash.contains(cur.value)){
            // console.log(cur.value);
            prev.next = cur.next;
            
        }
        else {
            hash.set(cur.value)
            prev = cur;
            
        }
        cur = cur.next;
    }
    return ll;
}

duplicate(list);
list.print();

