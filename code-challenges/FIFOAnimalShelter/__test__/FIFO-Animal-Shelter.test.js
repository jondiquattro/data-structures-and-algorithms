const Shelter = require('../FIFO-Animal-Shelter');


describe( 'Animal shelter has two methods', ()=>{
    describe('Enqueue should add an animal to the shelter', ()=>{
        it('should add an animal to the back of the queue', ()=>{

            let queue =['fish', 'dog','lamb', 'goat', 'turtle'];
            let AnimalShelter = new Shelter(queue);
            AnimalShelter.enqueue('cat');

            expect(AnimalShelter.pets).toEqual(['fish', 'dog','lamb', 'goat', 'turtle','cat'])
        })
        it('should put item in an empty array', ()=>{
            let queue =[];
            let AnimalShelter = new Shelter(queue);
            AnimalShelter.enqueue('cat');
            expect(AnimalShelter.pets).toEqual(['cat']);
        })
        it('should not alter the front of the queue', ()=>{
            let queue =['fish', 'dog','lamb', 'goat', 'turtle'];
            let AnimalShelter = new Shelter(queue);
            AnimalShelter.enqueue('cat');
            
            expect(AnimalShelter.pets[0]).toEqual('fish');
        })
    })
    describe('dequeue',()=>{
        it('should return the first instance of cat or dog and remove it from the queue',()=>{
            let queue =['fish', 'dog','lamb', 'goat', 'turtle'];
            let AnimalShelter = new Shelter(queue);

            AnimalShelter.dequeue('dog');
            expect(AnimalShelter.pets).toEqual(['fish','lamb', 'goat', 'turtle']);
        })
        it('it should should return null if the item being searched is not a dog or cat', ()=>{
            let queue =['fish','lamb', 'goat', 'turtle'];
            let AnimalShelter = new Shelter(queue);

            let result =AnimalShelter.dequeue('parrot');
            expect(result).toBe(null);

        })
        it('it should should not alter the array if an item other than cat or dog is searched', ()=>{
            let queue =['fish', 'dog','lamb', 'goat', 'turtle'];
            let AnimalShelter = new Shelter(queue);

            AnimalShelter.dequeue('fish');
            expect(AnimalShelter.pets).toEqual(['fish', 'dog','lamb', 'goat', 'turtle']);
        })
        // it('should ')
    })
})