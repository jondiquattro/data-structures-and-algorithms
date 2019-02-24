class Graph {


    constructor() {
        this.vertices = [];
        this.adjList = {};
    }
    addNode(vertex) {
        this.vertices.push(vertex);
        this.adjList[vertex] = { value: vertex, edges: [], discovered: false, explored: false };
    }

    addEdge(startNode, endNode, options) {
        let weight = null;
        (options[0]) ? weight = option[0] : weight = '';
        this.adjList[startNode].edges.push(endNode);
        if (options[1] === 'undirected') { this.adjList[endNode].edges.push(startNode); }

    }
    getEdges(node) {

        return this.adjList[node].edges;
    }

    DFS(start, end) {
        //queue of nodes
        let Q = [this.adjList[start]];
        while (Q.length) {

            let cur = Q.pop();
            if (!cur.explored) {

                cur.discovered = true;
                let edges = this.getEdges(cur.value);
                for (let i in edges) {

                    if (!this.adjList[edges[i]].discovered) {

                        this.adjList[edges[i]].discovered = true;
                        Q.push(this.adjList[edges[i]]);
                    }
                }
                this.adjList[cur.value].explored = true;

            }//end if 
            if (cur.explored) {
                console.log(cur.value);
            }
        }//end while loop Q empty


    }
    toString() {
        const result = [];
        let str = '';
        for (let i = 0; i < this.vertices.length; i++) {
            str += this.vertices[i] + ' -> ';
            let neighbors = this.adjList[this.vertices[i]].edges;
            for (var j = 0; j < neighbors.length; j++) {
                str += neighbors[j] + ' ';
                // result.push(str);
            }
            result.push(str);

            str = ''

        }
        return result;
    }
}