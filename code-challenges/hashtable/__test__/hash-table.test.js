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

    // describe('Set should take in a key and a value, hash the key and add the key and value to the this.map[hash]')
    //     it('should check for an empty bucket', ()=>{

    //     })
    describe('chaining should take in a a value, and return a linkedlist with value at the head',()=>{
        it('should create a new insatnce of linkedlist', ()=>{

            let Hash = new HashTable(6);
            let result = Hash.chaining('George');
            console.log(result.head.value)
            expect(result.head.value).toEqual('George');
        })
    })




})