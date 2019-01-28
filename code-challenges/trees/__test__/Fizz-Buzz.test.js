'use strict';
const Tree = require('../BST');
const fizzBuzz = require('../fizzBuzzTree/fizz-buzz')

describe( 'FizzBuzz can take in a tree and calculate fizz or buzz', ()=>{

    
        it('should be able to take in tree and calculate fizz or buzz', ()=>{
    
            let tree = new Tree.BinaryTree;
    
            let a = new Tree.Node(30);
            let b = new Tree.Node(15);
            let c = new Tree.Node(27);
            let d = new Tree.Node(5);
            let e = new Tree.Node(18);
            let f = new Tree.Node(20);
    
            a.left = b;
            a.right = c;
            b.right = d;
            b.left = e;
            c.right = f;
            
            tree.root = a;

            fizzBuzz(a);
        
            expect(tree.preOrder(a)).toEqual(["FizzBuzz", "FizzBuzz", "Fizz", "Buzz", "Fizz", "Buzz"])
    
        })
        it('it ignores all other numbers', ()=>{
    
            let tree = new Tree.BinaryTree;
    
            let a = new Tree.Node(30);
            let b = new Tree.Node(15);
            let c = new Tree.Node(27);
            let d = new Tree.Node(5);
            let e = new Tree.Node(4);
            let f = new Tree.Node(20);
    
            a.left = b;
            a.right = c;
            b.right = d;
            b.left = e;
            c.right = f;
            
            tree.root = a;

            fizzBuzz(a);
            expect(tree.preOrder(a)).toEqual(["FizzBuzz", "FizzBuzz", 4, "Buzz", "Fizz", "Buzz"])
    
        })
        it('should ignore string values', ()=>{
            
            let tree = new Tree.BinaryTree;
    
            let a = new Tree.Node(30);
            let b = new Tree.Node(15);
            let c = new Tree.Node(27);
            let d = new Tree.Node(5);
            let e = new Tree.Node('hello');
            let f = new Tree.Node(20);
    
            a.left = b;
            a.right = c;
            b.right = d;
            b.left = e;
            c.right = f;
            
            tree.root = a;

            fizzBuzz(a);
            expect(tree.preOrder(a)).toEqual(["FizzBuzz", "FizzBuzz", 'hello', "Buzz", "Fizz", "Buzz"])
            

            
        })
    })