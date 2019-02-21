'use strct';

const GraphClass = require('../graph.js');


class Node {
    constructor(value) {

        this.value = value;
    }
}

let a = new Node('A');
let b = new Node('B');
let c = new Node ('C');
let d = new Node ('D');
let e = new Node ('E');
let f = new Node ('F');
let g = new Node ('G');

describe('Graph should consist of addNode(), addEdge(), getNodes(), get neighbors(), and size()', ()=>{
    
    describe('addNode should add a node and an array value to the hash', ()=>{

        it('should add a key and empty array to the hash',()=>{
            const Graph = new GraphClass();
            // let a = new Node('A');
            // let b = new Node('B');
            // let c = new Node ('C');

            Graph.addNode(a);
            Graph.addNode(b);
            Graph.addNode(c);

            expect(Graph.hash.contains('A')).toBe(true);
            expect(Graph.hash.contains('B')).toBe(true);
            expect(Graph.hash.contains('C')).toBe(true);

        })
        it('Should add an array as the value for each key',()=>{
            const Graph = new GraphClass();
            // let a = new Node('A');
            // let b = new Node('B');
            // let c = new Node ('C');

            Graph.addNode(a);
            Graph.addNode(b);
            Graph.addNode(c);
            // console.log(Graph.hash.map[Graph.hash.hash('A')]);
        expect(Graph.hash.map[Graph.hash.hash('A')].head).toEqual({ value: { key: 'A', value: [] }, next: null })
           
        })
        it('Aray should be empty for each key',()=>{
            const Graph = new GraphClass();
            // let a = new Node('A');

            Graph.addNode(a);
            // console.log(Graph.hash.map[Graph.hash.hash('A')].head.value.value)
        expect(Graph.hash.map[Graph.hash.hash('A')].head.value.value[0]).toEqual(undefined)
           
        })
    })
    describe('addEdge should check if node is in the hash and if it isnt throw an error else it should retrieve the start node and push the edge to start node array',()=>{

        it('should check hash for start and end nodes',()=>{
            const Graph = new GraphClass();
            Graph.addNode(a);
            Graph.addNode(b);
            Graph.addNode(c);

            let x = new Node('X');
            let y = new Node('Y');

            expect(Graph.addEdge(x,y)).toBe(true);
            expect(Graph.addEdge(a,b)).toBe(false);

            
        })

        it('should add b edge to start node array', ()=>{
            const Graph = new GraphClass();
            Graph.addNode(a);
            Graph.addNode(b);
            Graph.addNode(c)

            Graph.addEdge(a,b)

        expect(Graph.hash.map[Graph.hash.hash('A')].head.value.value[0].node).toEqual({ value: 'B' });
        })

        it('should add a weight when supplied', ()=>{
            const Graph = new GraphClass();
            Graph.addNode(a);
            Graph.addNode(b);
            Graph.addNode(c)

            Graph.addEdge(a,b, 45)
            // console.log(Graph.hash.map[Graph.hash.hash('A')].head.value.value[0].weight)

        expect(Graph.hash.map[Graph.hash.hash('A')].head.value.value[0].weight).toEqual(45);
        })
    })
    
    describe('getNeighbors should take in a node and return a collection of nodes connected to the given node, and if a weight is supplied it should contain weight',()=>{

        it('Should take in a node and return a collection of connected node.',()=>{

            const Graph = new GraphClass();
            Graph.addNode(a);
            Graph.addNode(b);
            Graph.addNode(c);
    
            Graph.addEdge(a,b)
            Graph.addEdge(a,c)
            let result = Graph.getNeighbors(a);
            // console.log(JSON.stringify(result))
            expect(JSON.stringify(result)).toEqual('[{"node":{"value":"B"},"weight":0},{"node":{"value":"C"},"weight":0}]')
            
            
        })
        it('should return the weight of each connection if it was supplied', ()=>{
            const Graph = new GraphClass();
            Graph.addNode(a);
            Graph.addNode(b);
            Graph.addNode(c);
    
            Graph.addEdge(a,b,20)
            Graph.addEdge(a,c)
            let result = Graph.getNeighbors(a);
            // console.log(JSON.stringify(result))
            expect(JSON.stringify(result)).toEqual('[{"node":{"value":"B"},"weight":20},{"node":{"value":"C"},"weight":0}]')

        })
    })
    describe('get nodes should return all the nodes in the graph as a collection',()=>{
        
        it('should return the nodes in the graph', ()=>{

            const Graph = new GraphClass();
            Graph.addNode(a);
            Graph.addNode(b);
            Graph.addNode(c);
            Graph.getNodes();
        })
    })
})