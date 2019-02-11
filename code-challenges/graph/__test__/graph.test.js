'use strct';

const GraphClass = require('../graph.js');


// class Node {
//     constructor(value) {

//         this.value = value;
//     }
// }
describe('Graph should consist of addNode(), addEdge(), getNodes(), get neighbors(), and size()', ()=>{
    
    describe('addNode should add a node and an array value to the hash', ()=>{

        it('should add a key and empty array to the hash',()=>{
            const Graph = new GraphClass();
            let a =Graph.addNode('A');
            let b =Graph.addNode('B');
            let c =Graph.addNode('C');

            expect(Graph.edgeList.contains('A')).toBe(true);
            expect(Graph.edgeList.contains('B')).toBe(true);
            expect(Graph.edgeList.contains('C')).toBe(true);

        })
        it('Should add an array as the value for each key',()=>{
            const Graph = new GraphClass();
            let a =Graph.addNode('A');
            let b =Graph.addNode('B');
            let c =Graph.addNode('C');
        expect(Graph.edgeList.map[Graph.edgeList.hash('A')].head).toEqual({ value: { key: 'A', value: [] }, next: null })
           
        })
        it('Aray should be empty for each key',()=>{
            const Graph = new GraphClass();
            let a =Graph.addNode('A');
            // console.log(Graph.edgeList.map[Graph.edgeList.hash('A')].head.value.value)
        expect(Graph.edgeList.map[Graph.edgeList.hash('A')].head.value.value[0]).toEqual(undefined)
           
        })
    })
    describe('addEdge should check if node is in the hash and if it isnt throw an error else it should retrieve the start node and push the edge to start node array',()=>{

        it('should check hash for start and end nodes',()=>{
            const Graph = new GraphClass();
            let a =Graph.addNode('A');
            let b =Graph.addNode('B');
            let c =Graph.addNode('C');

            expect(Graph.addEdge('x','y')).toBe(true);
            expect(Graph.addEdge('A','B')).toBe(false);

            
        })

        it('should add b edge to start node array', ()=>{
            const Graph = new GraphClass();
            let a =Graph.addNode('A');
            let b =Graph.addNode('B');
            let c =Graph.addNode('C')

            Graph.addEdge('A','B')
        expect(Graph.edgeList.map[Graph.edgeList.hash('A')].head.value.value[0]).toEqual({ node: 'B', weight: 0 });
        })

        it('should add a weight when supplied', ()=>{
            const Graph = new GraphClass();
            let a =Graph.addNode('A');
            let b =Graph.addNode('B');
            let c =Graph.addNode('C')

            Graph.addEdge('A','B',15)
        expect(Graph.edgeList.map[Graph.edgeList.hash('A')].head.value.value[0]).toEqual({ node: 'B', weight: 15 });
        })
    })

  

    
//     xdescribe('console.log',()=>{

//         it('console.log things here',()=>{

//             const Graph = new GraphClass();
//             let a =Graph.addNode(new Node('A'));
//             let b =Graph.addNode(new Node('B'));
//             let c =Graph.addNode(new Node('C'));

//             // Graph.addEdge(a,b)
//             // Graph.addEdge(a,c)
//             console.log(Graph);
//         })
//     })
})