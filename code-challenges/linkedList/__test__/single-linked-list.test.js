const LinkedList = require('../single-linked-list/linked-list');


describe('anything', ()=>{
    it('should do stuff', ()=>{
        let list = new LinkedList();
        list.add('James');
        list.add('cathy');
        list.add('Zach');

        
    })
describe('recursive walk', ()=>{
    it('should iterate list recursively', ()=>{
        let list = new LinkedList();
        list.add('James');
        list.add('cathy');
        list.add('Zach');
        list.add('Jon');
        list.add('Amber');
        list.add('Benny');
        list.add('Paul');

        list.itertate(list.head);
        

    })
})
})