const Graph = require('../graph');


class Node {
    constructor(value) {

        this.value = value;
    }
}
function depthFirst(graph, start){
    let visited ={};
    let result = [];
    let list = graph.hash;

    let _walk = (vertex)=>{
        if(!vertex){return null;}

        visited[vertex]=true;
        result.push(vertex);
        console.log(list)

        for(let i=0; i<list[vertex].length; i++){
            if(!visited[vertex[i]]){
                return _walk(virtex[i])
            }
        }

    }
    _walk(start);
    return result;
}

let a = new Node('A');
let b = new Node('B');
let c = new Node ('C');
let d = new Node ('D');
let e = new Node ('E');
let f = new Node ('F');
let g = new Node ('G');
let h = new Node ('H');



const graph = new Graph(20);

graph.addNode(a);
graph.addNode(b);
graph.addNode(c);
graph.addNode(d);
graph.addNode(e);
graph.addNode(f);
graph.addNode(g);


graph.addEdge(a,b);
graph.addEdge(a,d);

graph.addEdge(b,a)
graph.addEdge(b,d)
graph.addEdge(b,c)
graph.addEdge(c,g)


graph.addEdge(d,a)
graph.addEdge(d,b)
graph.addEdge(d,e)
graph.addEdge(d,f)
graph.addEdge(d,h)


graph.addEdge(e,d)

graph.addEdge(f,d)

graph.addEdge(f,h)


depthFirst(graph,a.value);




