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
        
        if (typeof(key) !== 'string'){
        return 'error key must be a string';
        }
        //turns name into an index
        let hash = this.hash(key);

        if(!this.map[hash]){
            this.map[hash]=new LinkedList
        }
        this.map[hash].add({key:key,value:value})
    
    }
    //takes a string
    contains(key) {
        if (typeof(key) !== 'string'){
            return 'error key must be a string';
            }
        return (this.map[this.hash(key)] ? true : false)
    }

    get(key){
        
        if(!this.contains(key)) return null;
        let node = this.map[this.hash(key)].head
        if(node.next){
            let current = node;
            while(current.next){
                if(current.value.key === key) return current.value.value;
                current = current.next;
            }
        }
        else{
            return this.map[this.hash(key)].head.value.value;
        }
    }

}


module.exports = HashMap;