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
  
    })

    describe('Set should take a key and valu pair, check the map array and either insert or cahin to map[hash].head',()=>{
        
        it('should take in a key and value and create a new linked list if there is no collision',()=>{
            let Hash = new HashTable(1);

            Hash.set("Ringo", "drummer");
            expect(Hash.map[0].head).toEqual({value: { key: 'Ringo', value: 'drummer' }, next: null})
        })
        it('Should add to the linked list if there is a collision',()=>{
            let Hash = new HashTable(1);
            Hash.set("Ringo", "drummer");
            Hash.set("George", "bass");
            Hash.set("Paul", "lead guitar");
            Hash.set("John", "rythm guitar");
            
            expect(Hash.map[0].size).toEqual(4);
        })
        it('It should only take a string as a key',()=>{
            let Hash = new HashTable(6);
            expect(Hash.set(4, "drummer")).toEqual('error key must be a string');
        })


    describe('Has should check the hash map for the supplied value and return true or false', ()=>{

        it('Should take in a value and return true if it is contained in the set',()=>{

            let Hash = new HashTable(1);
            Hash.set("Ringo", "drummer");
            Hash.set("George", "bass");
            Hash.set("Paul", "lead guitar");
            Hash.set("John", "rythm guitar");

            expect(Hash.contains('George')).toBe(true);
        })

        it('Should take in a value and return false if it is not contained in the set',()=>{

            let Hash = new HashTable(1);
            Hash.set("Ringo", "drummer");
            Hash.set("George", "bass");
            Hash.set("Paul", "lead guitar");
            Hash.set("John", "rythm guitar");

            expect(Hash.contains('Mick')).toBe(true);
        })

        it('Should only take in strings',()=>{

            let Hash = new HashTable(1);
            Hash.set("Ringo", "drummer");
            Hash.set("George", "bass");
            Hash.set("Paul", "lead guitar");
            Hash.set("John", "rythm guitar");

            expect(Hash.contains(4)).toBe('error key must be a string');

        })
    })
    describe('should take in a key and return the value of the key',()=>{
        it('should return the value from a single node at the hash', ()=>{

            let Hash = new HashTable(1024);
            Hash.set("Ringo", "drummer");
            Hash.set("George", "bass");
            Hash.set("Paul", "lead guitar");
            Hash.set("John", "rythm guitar");

            expect(Hash.get('George')).toEqual('bass');
        })
        it('should return the value from the hashmap', ()=>{

            let Hash = new HashTable(1);
            Hash.set("Ringo", "drummer");
            Hash.set("George", "bass");
            Hash.set("Paul", "lead guitar");
            Hash.set("John", "rythm guitar");

            expect(Hash.get('George')).toEqual('bass');
        })
        it('should return null if the key is not in the hashmap', ()=>{
            //here is some stuff
            let Hash = new HashTable(1024);
            Hash.set("Ringo", "drummer");
            Hash.set("George", "bass");
            Hash.set("Paul", "lead guitar");
            Hash.set("John", "rythm guitar");

            expect(Hash.get('Mick')).toEqual(null);
        })
    })
})