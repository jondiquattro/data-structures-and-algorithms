
'use strict';

class Node {
    constructor(value) {

        this.value = value;
    }
}

class Graph{
  constructor(){
    this._adjacencyList = new Map();
  }

  addNode(node){
    this._adjacencyList.set(node,[]);
  }
  
  addEdge(startNode,endNode,weight = 0){
    if(!this._adjacencyList.has(startNode) ||
       !this._adjacencyList.has(endNode))
      throw new Error('__ERROR__ invalid nodes');
    
    let adjacencies = this._adjacencyList.get(startNode);

    adjacencies.push({
      node:endNode,
      weight,
    });
  }

  getNeighbors(node){
    if(!this._adjacencyList.has(node))
      throw new Error('__ERROR__ invalid node');
    
    return [...this._adjacencyList.get(node)];
  }

  breadthSearch(node){
    let breadth = [];
    let result = [];
    breadth.push(node);
    // console.log(breadth)

    while(breadth.length){

      // console.log(result);
      let cur = breadth.pop();
      console.log('current',cur);

      if(!cur.touched) {result.push(cur);}
      cur.touched = true;
      console.log('result',result)
      
      let neighbors = this.getNeighbors(cur);
      // console.log(result)

      if(neighbors.length){
        for (let i = 0; i<neighbors.length; i++){
          breadth.push(neighbors[i]);
        }
  
      }//end if
          
        }
    return result;
      
    }


  
};


let graph = new Graph();
let a = new Node('A')
let b = new Node('B')
let c = new Node('C')
let d = new Node('D')
let e = new Node('E')
let f = new Node('F')



graph.addNode(a);
graph.addNode(b);
graph.addNode(c);
graph.addNode(d);
graph.addNode(e);
graph.addNode(f);

graph.addEdge(a,b);
graph.addEdge(a,c);

graph.addEdge(b,c);
graph.addEdge(b,e);

graph.addEdge(c,f);

// console.log(graph.getNeighbors(a));
console.log(graph.breadthSearch(e))








