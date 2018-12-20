const shift = require('../array_shift/array-shift.js');

it('can take an array and a value and insert value into middle of array', ()=>{
    

    let expected = [1,2,5,3,4,]
  
    let result = shift.insertShiftArray([1,2,3,4],5)
    expect(result).toEqual(expected);
  });
  
  it('can take an array of ints and a string value and insert value into middle of array', ()=>{
    

    let expected = [1,2,'a',3,4,]
  
    let result = shift.insertShiftArray([1,2,3,4],'a')
    expect(result).toEqual(expected);
  });

  it('can take an array of strings and an int value and insert value into middle of array', ()=>{
    

    let expected = ['a','b',5,'c','d']
  
    let result = shift.insertShiftArray(['a','b','c','d'],5)
    expect(result).toEqual(expected);
  });