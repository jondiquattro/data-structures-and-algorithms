const search = require('./array-Binary-Search.js');


describe('testing for binary sort', ()=>{
  const testArr = [1,3, 5, 6,7,9,15,22,23,24,27,29]

  it('can take a sorted array and return the index on a target match', ()=>{
    
    let result = search.binarySearch(testArr,3);
  
    expect(result).toEqual(1);
  });

  it('can reteurn -1 if the values is not found', ()=>{
    let result = search.binarySearch(testArr,35);
    expect(result).toEqual(-1);

  })
})
