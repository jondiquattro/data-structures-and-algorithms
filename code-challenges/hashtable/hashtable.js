'use strict';
const LinkedList = require('../linkedList/single-linked-list/linked-list');

class HashMap {

    constructor(size) {

        this.size = size;
        this.map = new Array(size);
    }


    //turns key into a hash number between 0 - this.size
    hash(key) {
        if(typeof(key)!== "string"){
            let t = new TypeError();
            return t;
            
        }
        else{
            let keyArr = key.split('');
            let accum = null;
            keyArr.forEach((charVal => { accum += charVal.charCodeAt(0) }))
            return accum % this.size;
        }


    }

    set(key, value) {
        //turns name into an index
        let hash = this.hash(key);
        
        //creates a new linked list
        // if (!this.map[hash]) { this.map[hash] = []; }
        // this.map[hash].push({ [key]: value })


        if(!this.map[hash]){this.map[hash]=this.chaining(key,value)}
        this.map[hash].append({key:key,value:value})
    }
    //takes a string
    has(value) {
        // console.log(this.map[this.hash(value)])
        return (this.map[this.hash(value)] ? true : false)


    }
    chaining(key,value){
        
        //creates a new instance of LL
        let head = new LinkedList();
        //adds key and value to LL
        head.add({key:key,value:value})
        
        return head;
    }
}

// let myHash = new HashMap(1044);

// myHash.set('John', 'dad');
// myHash.set('Cathy', 'mom');
// myHash.set('Zach', 'Son');
// myHash.set('Allie', 'daughter');
// myHash.set('lAlie', 'duh');

// console.log(myHash.has('lAlie'));


module.exports = HashMap;