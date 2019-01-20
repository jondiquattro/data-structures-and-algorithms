'use strict';



class Node {
    constructor(value){
        this.value =value;
        this.right = null;
        this.left = null;
        
    }
}


class BinaryTree{
    constructor(){
        this.root = null;//sets root to null
    }

    preOrder(){
    let nodes = [];

    //takes a node
    let _walk = (node) =>{

    nodes.push(node.value);
    
    if(node.left){_walk(node.left)}  //if there is a node.left walk left
    if(node.right){_walk(node.right)}//if there is a node.right walk right
    };
    //checks for null tree
    if(this.root !== null){
        _walk(this.root);
    }
    return nodes;
    }

    postOrder(){
        let nodes = [];
        
        let _walk = (node)=>{
            if(node.left){_walk(node.left)};
            if(node.right){_walk(node.right)};
            nodes.push(node.value);

        };


        if(this.root !== null){
            _walk(this.root);
        }
        return nodes;  //returns node array
    }

    inOrder(){
        let nodes = [];
    
        let _walk = (node) =>{
    
        
        if(node.left){_walk(node.left)}  //if there is a node.left walk left
        nodes.push(node.value);

        if(node.right){_walk(node.right)}//if there is a node.right walk right
        };
        if(this.root !== null){
            _walk(this.root);
        }
        return nodes;
        }

        findMaximumValue(){
    
            if(!this.route){return;}
    
            let max = this.root.value;
    
            let queue = [];
    
            queue.push(this.root);
    
            while(queue.length){
    
                let node = queue.shift();
    
                if (max<node.value){
                    max = node.value
                }
    
                if(node.left){queue.push(node.left);
                if(node.right){queue.push(node.right)}}
            }
            return max;
        }
}
