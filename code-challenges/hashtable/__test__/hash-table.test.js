'use strict';

const HashTable = require('../hashtable');



describe('hash tables class should have the following methods', ()=>{

    describe('Hash should take in a string and return an integer that is duplicated each time',()=>{

        it('should take in a string',()=>{

            let Hash = new HashTable();

            let result = Hash.hash(4);
            expect(result).toBeInstanceOf(Error)
            

        })
        it('should return an integer between 0 and size of array', ()=>{
            let Hash = new  HashTable(6);
            let result =Hash.hash('Ringo')

            expect(Number.isInteger(result)).toEqual(true);
            expect(Number.isInteger(result*.03)).toEqual(false);


        })
        it('should return an integer between 0 and size of array', ()=>{
            let Hash = new  HashTable(6);
            let result =Hash.hash('Paul');
            expect((result<=Hash.size)).toEqual(true);

        })
    })

    describe('chaining should take in a a value, and return a linkedlist with value at the head',()=>{
        it('should create a new instance of linkedlist with a value', ()=>{

            let Hash = new HashTable(6);
            let result = Hash.chaining('George');
            
            expect(result.head.value).toEqual('George');
        })
  
    })

    describe('Set should take a key and valu pair, check the map array and either insert or cahin to map[hash].head',()=>{
        it('should take in a key and value and create a new linked list if there is no collision',()=>{
            let Hash = new HashTable(1);

            //test with multiple hash 
            // let result = Hash.set("Ringo", "drummer");

            Hash.set("Ringo", "drummer");
            Hash.set("George", "bass");
            Hash.set("Paul", "lead guitar");
            Hash.set("John", "rythm guitar");



            console.log(Hash);


        })
    })




})