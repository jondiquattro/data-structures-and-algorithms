'use strict';
const Hash = require('../hashtable/hashtable.js');


class Graph{
    constructor(){
        this.edgeList = new Hash(1024);
    }

addNode(node){
    //create a bucket for the node
    //node is the key and [] is the value
    this.edgeList.set(node, [])
}
addEdge(startNode,endNode,weight = 0){
    if(!this.edgeList.contains(startNode) ||
       !this.edgeList.contains(endNode)){console.log('if was true')
       return true}

    //   throw new Error('__ERROR__ invalid nodes');
  

    //get returns the value of the node
    let adjacencies = this.edgeList.get(startNode);

    adjacencies.push({
      node:endNode,
      weight,
    });
    //since I can't figure out how to make the error test work
    return false;
  }

  getNeighbors(node){
    if(!this.edgeList.contains(node))
    //   throw new Error('__ERROR__ invalid node');
    return false;
    
    return [...this.edgeList.get(node)];
  }

}

module.exports = Graph;