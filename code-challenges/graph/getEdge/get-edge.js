'use strict';


function directFlight(graph, arr){
let cost = 0;
let direct = false;
let edges = [];

for (let i =0; i<arr.length; i++){

    //returns an object that can be accessed with key:value
let cur = getNeighbors(arr[i]);

for(let i = 0; i<arr.length; i++){
    if(cur[arr[i]]){
        edges.push(cur[arr[i]])
    }
}

}

if (!direct){
    if(edges.length === arr.length){
        direct = true;
        for (let i = 0; i<edges.length; i++){
            total += edges.weigth
        }
    }
}
return direct + ','+total;
}