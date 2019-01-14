'use strict';



class Node {
    constructor(value){
        this.value =value;
        this.right = null;
        this.left = null;
        
    }
}


class BinaryTreeClass{
    constructor(){
        this.root = null;//sets root to null
    }

    preOrder(){
    let nodes = [];

    let _walk = (node) =>{

    nodes.push(node.value);
    
    if(node.left){_walk(node.left)}  //if there is a node.left walk left
    if(node.right){_walk(node.right)}//if there is a node.right walk right
    };

    _walk(this.root);
    return nodes;
    }

    postOrder(){
        let nodes = [];
        
        let _walk = (node)=>{
            if(node.left){_walk(node.left)};
            if(node.right){_walk(node.right)};
            nodes.push(node.value);

        };


        _walk(this.root);//calls the walk function so that it runs
        return nodes;  //returns node array
    }

    inOrder(){
        let nodes = [];
    
        let _walk = (node) =>{
    
        
        if(node.left){_walk(node.left)}  //if there is a node.left walk left
        nodes.push(node.value);

        if(node.right){_walk(node.right)}//if there is a node.right walk right
        };
    
        _walk(this.root);
        return nodes;
        }
}