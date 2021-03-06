'use strict';
const Tree = require('../BST');

describe( 'Binary Trees should contain pre, in, post order treversal methods', ()=>{
    xdescribe('Binary tree preorder method should be able to do the following:', ()=>{
        it('should be able to take in a tree and traverse it in prefix order', ()=>{
    
            let tree = new Tree.BinaryTree;
    
            let a = new Tree.Node('a');
            let b = new Tree.Node('b');
            let c = new Tree.Node('c');
            let d = new Tree.Node('d');
            let e = new Tree.Node('e');
            let f = new Tree.Node('f');
    
            a.left = b;
            a.right = c;
            b.right = d;
            b.left = e;
            c.right = f;
            
            tree.root = a;
        
            expect(tree.preOrder(a)).toEqual([ 'a', 'b', 'e', 'd', 'c', 'f' ])
    
        })
        it('should be able to traverse an empty tree', ()=>{
    
            let tree = new Tree.BinaryTree();
            tree.root = null;
    
            expect(tree.preOrder()).toEqual([]);
            
    
    
        })
        it('should be able to traverse a tree of one', ()=>{
            
            let a = new Tree.Node('a');
    
            let tree = new Tree.BinaryTree();
            tree.root = a;
    
            expect(tree.preOrder(a)).toEqual(['a']);
        })
    })

    xdescribe('Binary tree Inorder method should be able to do the following:', ()=>{
        it('should be able to take in a tree and traverse it in an in line order', ()=>{
    
            let tree = new Tree.BinaryTree;
    
            let a = new Tree.Node('a');
            let b = new Tree.Node('b');
            let c = new Tree.Node('c');
            let d = new Tree.Node('d');
            let e = new Tree.Node('e');
            let f = new Tree.Node('f');
    
            a.left = b;
            a.right = c;
            b.right = d;
            b.left = e;
            c.right = f;
            
            tree.root = a;
        
            expect(tree.inOrder(a)).toEqual([ 'e', 'b', 'd', 'a', 'c', 'f' ])
    
        })
        it('should be able to traverse an empty tree', ()=>{
    
            let tree = new Tree.BinaryTree();
            tree.root = null;
    
            expect(tree.preOrder()).toEqual([]);
            
    
    
        })
        it('should be able to traverse a tree of one', ()=>{
            
            let a = new Tree.Node('a');
    
            let tree = new Tree.BinaryTree();
            tree.root = a;
    
            expect(tree.preOrder(a)).toEqual(['a']);
        })

    })

    xdescribe('Binary tree postorder method should be able to do the following:', ()=>{
        it('should be able to take in a tree and traverse it in a post order', ()=>{
    
            let tree = new Tree.BinaryTree;
    
            let a = new Tree.Node('a');
            let b = new Tree.Node('b');
            let c = new Tree.Node('c');
            let d = new Tree.Node('d');
            let e = new Tree.Node('e');
            let f = new Tree.Node('f');
    
            a.left = b;
            a.right = c;
            b.right = d;
            b.left = e;
            c.right = f;
            
            tree.root = a;
        
            expect(tree.postOrder(a)).toEqual([ 'e', 'd', 'b', 'f', 'c', 'a' ])
    
        })
        it('should be able to traverse an empty tree', ()=>{
    
            let tree = new Tree.BinaryTree();
            tree.root = null;
    
            expect(tree.preOrder()).toEqual([]);
            
    
    
        })
        it('should be able to traverse a tree of one', ()=>{
            
            let a = new Tree.Node('a');
    
            let tree = new Tree.BinaryTree();
            tree.root = a;
    
            expect(tree.preOrder(a)).toEqual(['a']);
        })
    })

    describe('Breadth first should do the following:', ()=>{
        it('should be able to traverse the tree by breadth instead of depth', ()=>{
            let tree = new Tree.BinaryTree;

            let a = new Tree.Node('a');
            let b = new Tree.Node('b');
            let c = new Tree.Node('c');
            let d = new Tree.Node('d');
            let e = new Tree.Node('e');
            let f = new Tree.Node('f');
    
            a.left = b;
            a.right = c;
            b.right = d;
            b.left = e;
            c.right = f;
            
            tree.root = a;
            expect(tree.breadthFirst(a)).toEqual(['a', 'b','c','e','d','f']);
        })
        it('should traverse a tree of one', ()=>{
            let tree = new Tree.BinaryTree();
            let a = new Tree.Node('a');
            tree.root = a;
            expect(tree.breadthFirst()).toEqual(['a']);
        })
        it('should traverse an empty tree', ()=>{
            let tree = new Tree.BinaryTree();
            // let a = new Tree.Node('a');
            // tree.root = a;
            expect(tree.breadthFirst()).toEqual(null);
        })
    })
    describe('findMaxValue should return the largest value in a tree', ()=>{

        it('should find the max value', ()=>{
            let tree = new Tree.BinaryTree;

            let a = new Tree.Node(1);
            let b = new Tree.Node(2);
            let c = new Tree.Node(3);
            let d = new Tree.Node(6);
            let e = new Tree.Node(5);
            let f = new Tree.Node(4);
    
            a.left = b;
            a.right = c;
            b.right = d;
            b.left = e;
            c.right = f;
            
            tree.root = a;
            expect(tree.findMaximumValue()).toEqual(6);
        })
        it('should ignore anything that isnt a number', ()=>{
            let tree = new Tree.BinaryTree;

            let a = new Tree.Node(1);
            let b = new Tree.Node('a');
            let c = new Tree.Node(3);
            let d = new Tree.Node(6);
            let e = new Tree.Node('b');
            let f = new Tree.Node(4);
    
            a.left = b;
            a.right = c;
            b.right = d;
            b.left = e;
            c.right = f;
            
            tree.root = a;
            expect(tree.findMaximumValue()).toEqual(6);
        })

        it('should return null on an empty tree', ()=>{
            let tree = new Tree.BinaryTree();
            expect(tree.findMaximumValue()).toEqual(null);

        })
    })
})//end Binary Tree Class


xdescribe( 'BinarySearchTree Class should contain the add method that does the following', ()=>{
    describe('the add mathod should use a recursive binary search and add a node to the next logical place in the tree', ()=>{

        it('should find the next logical place in the tree', ()=>{
            let tree = new Tree.BinarySearchTree();
    
            let a = new Tree.Node(7);
            let b = new Tree.Node(3);
            let c = new Tree.Node(12);
            let d = new Tree.Node(5);
            let e = new Tree.Node(2);
            let f = new Tree.Node(9);
    
            a.left = b;
            a.right = c;
            b.right = d;
            b.left = e;
            c.left = f;
            
            tree.root = a;
            tree.add(4);
            expect(d.left.value).toEqual(4);

        })

        it('should add a node to an empty tree', ()=>{
            let tree = new Tree.BinarySearchTree();
            tree.add(4);//

            console.log(tree);
            expect(tree.root.value).toEqual(4);
            //small change

        })

        it('should be able to build a tree', ()=>{
            let tree = new Tree.BinarySearchTree();
            tree.add(7);
            tree.add(3);
            tree.add(12);
            tree.add(5);
            tree.add(2);
            tree.add(9);
            tree.add(4);

            let PreTree = new Tree.BinaryTree;

            PreTree.root = tree.root;
            expect(PreTree.preOrder()).toEqual([ 7, 3, 2, 5, 4, 12, 9 ]);
          

            
        })
    })


})

