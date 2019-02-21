const join = require('../leftJoin/left-join');

const Hash = require('../hashtable');
const leftHash = new Hash(33);
const rightHash = new Hash(33);



describe('it should take two tables and do a left join on key', () => {
    it('should return an array of arrays with all values from left table and any values from right table that match on key', () => {

        const leftHash = new Hash(33);
        const rightHash = new Hash(33);
        
        leftHash.set('fond', 'enamored');
        leftHash.set('wrath', 'anger');
        leftHash.set('diligent', 'employed');
        leftHash.set('outift', 'garb');
        leftHash.set('guide', 'usher');

        rightHash.set('fond', 'averse');
        rightHash.set('wrath', 'delight');
        rightHash.set('diligent', 'idle');
        rightHash.set('guide', 'follow');
        rightHash.set('flow', 'jam');


        expect(join(leftHash,rightHash)).toEqual(    [ [ 'outift', 'garb', null ],
        [ 'wrath', 'anger', 'wrath' ],
        [ 'diligent', 'employed', 'diligent' ],
        [ 'fond', 'enamored', 'fond' ],
        [ 'guide', 'usher', 'guide' ] ])

    })
    it('should return the left table if the right table is empty', ()=>{
        const leftHash = new Hash(33);
        const rightHash = new Hash(33);

        leftHash.set('fond', 'enamored');
        leftHash.set('wrath', 'anger');
        leftHash.set('diligent', 'employed');
        leftHash.set('outift', 'garb');
        leftHash.set('guide', 'usher');

        expect(join(leftHash,rightHash)).toEqual([["outift", "garb", null], ["wrath", "anger", null], ["diligent", "employed", null], ["fond", "enamored", null], ["guide", "usher", null]])
    })
    it('should return empty array if the left table is empty',()=>{

        // console.log(leftHash)
        const leftHash = new Hash(33);
        const rightHash = new Hash(33);
        
        rightHash.set('fond', 'enamored');
        rightHash.set('wrath', 'anger');
        rightHash.set('diligent', 'employed');
        rightHash.set('outift', 'garb');
        rightHash.set('guide', 'usher');

        expect(join(leftHash,rightHash)).toEqual([]);
    })
})