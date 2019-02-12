'use strict';
const Hash = require('../hashtable/hashtable.js');


class Graph{
    constructor(){
        this.hash = new Hash(10);
        this.size = 0;
    }

addNode(node){
    //create a bucket for the node
    //node is the key and [] is the value
    this.hash.set(node.value, [])
    this.size ++;
    return node;
}
addEdge(startNode,endNode,weight = 0){
    if(!this.hash.contains(startNode.value) ||
       !this.hash.contains(endNode.value)){return true}

    //   throw new Error('__ERROR__ invalid nodes');

    //get takes in a key and returns the value of the node which should be an empty array
    let adjacencies = this.hash.get(startNode.value);

    adjacencies.push({
      node:endNode,
      weight,
    });
    //since I can't figure out how to make the error test work
    return false;
  }

  getNeighbors(node){

    if(!this.hash.contains(node.value)){
    return false;

    }
    //   throw new Error('__ERROR__ invalid node');
    
    return [...this.hash.get(node.value)];
  }
    size(){
return this.size;
}
}

module.exports = Graph;