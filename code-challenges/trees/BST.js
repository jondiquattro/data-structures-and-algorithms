'use strict';

class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;

    }
}
//////////////////////////
//takes in a tree dummy stop over thinking it!

class BinaryTree {
    constructor() {
        this.root = null;//sets root to null
    }

    preOrder() {
        let nodes = [];

        //takes a node
        let _walk = (node) => {

            nodes.push(node.value);

            if (node.left) { _walk(node.left) }  //if there is a node.left walk left
            if (node.right) { _walk(node.right) }//if there is a node.right walk right
        };
        //checks for null tree
        if (this.root !== null) {
            _walk(this.root);
        }
        return nodes;
    }

    postOrder() {
        let nodes = [];

        let _walk = (node) => {
            if (node.left) { _walk(node.left) };
            if (node.right) { _walk(node.right) };
            nodes.push(node.value);

        };


        if (this.root !== null) {
            _walk(this.root);
        }
        return nodes;  //returns node array
    }

    inOrder() {
        let nodes = [];

        let _walk = (node) => {


            if (node.left) { _walk(node.left) }  //if there is a node.left walk left
            nodes.push(node.value);

            if (node.right) { _walk(node.right) }//if there is a node.right walk right
        };
        if (this.root !== null) {
            _walk(this.root);
        }
        return nodes;
    }

    breadthFirst() {
        let order = [];
        let queue = [];

        queue.push(this.root);

        while (queue.length) {

            let current = queue.shift();
            if(current === null){
                return null;
            }
            console.log(current.value);

            order.push(current.value);

            if (current.left) {queue.push(current.left);}
            if (current.right) {queue.push(current.right);}
        }
        return order;
    }

    findMaximumValue(){
    
        if(!this.root){return null}

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


//////////////////////////
//takes in a tree dummy stop over thinking it!


//add should take a node and insert it into the tree
class BinarySearchTree {
    constructor(value) {
        this.root = null;
        this.value = null;
    }

    add(value) {
        //create a node with the value
        this.value = value;
        // find the next logical place for the node
        let _walk = (node) => {


            if (this.value < node.value) {

                if (node.left) { _walk(node.left) }

                else if (!node.left) {
                    node.left = new Node(this.value);
                }
            }
            if (this.value > node.value) {
                if (node.right) { _walk(node.right) }
                //after recursion is over
                else if (!node.right) {
                    node.right = new Node(this.value);
                }

            }

        };
        //if tree is not empty
        if (this.root) {
            _walk(this.root);
        }
        else {
            this.root = new Node(value);
        }
    }
    print() {
        console.log(this.root);

    }
}



module.exports = { BinarySearchTree, BinaryTree, Node };