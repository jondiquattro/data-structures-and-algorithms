
'use strict';



class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;

    }
}


class TreeClass {
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

        _walk(this.root);//I don't understand this line
        return nodes;
    }

    postOrder() {
        let nodes = [];

        let _walk = (node) => {
            if (node.left) { _walk(node.left) };
            if (node.right) { _walk(node.right) };
            nodes.push(node.value);

        };


        _walk(this.root);//calls the walk function so that it runs
        return nodes;  //returns node array
    }

    inOrder() {
        let nodes = [];

        let _walk = (node) => {


            if (node.left) { _walk(node.left) }  //if there is a node.left walk left
            nodes.push(node.value);

            if (node.right) { _walk(node.right) }//if there is a node.right walk right
        };

        _walk(this.root);
        return nodes;
    }

    FizzBuzz(tree) {

        function _walk(node) {
            if (node.left) {
                if (node.left.value % 3 === 0 && node.left.value % 5 === 0) {
                    node.left.value = 'FizzBuzz';
                }
                else if (node.left.value % 3 === 0) {
                    node.left.value = 'Fizz';
                }
                else if (node.left.value) {
                    node.left.value = 'Buzz'
                }
                _walk(node.left);

            }
            if (node.right) {
                if (node.right.value % 3 === 0 && node.right.value % 5 === 0) {
                    node.right.value = 'FizzBuzz';
                }
                else if (node.right.value % 3 === 0) {
                    node.right.value = 'Fizz';
                }
                else if (node.right.value) {
                    node.right.value = 'Buzz'
                }
                _walk(node.left);

            }

        }//end _walk
        _walk(this.root);
    }
}


