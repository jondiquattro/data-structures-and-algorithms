const search = require('./Array/__test__/array-Binary-Search.js');

it('can take a sorted array and return the index on a target match', ()=>{
    

    let expected = 1;
  
    let result = search.binarySearch([1,3,7,8,9,10,11,13], 3)
    expect(result).toEqual(expected);
  });