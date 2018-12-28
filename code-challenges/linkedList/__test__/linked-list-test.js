
const linkedList = require('../single-linked-list/linked-list.js');

describe('it should do stuff', ()=>{
    let list = new linkedList();
    it('should do stuff', ()=>{
        expect(list.add('John')).toEqual('John')
    })
})