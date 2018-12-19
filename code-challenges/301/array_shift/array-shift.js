
const shift = module.exports = {};


shift.insertShiftArray = function(arr, item){
  let mid = Math.floor((arr.length-1)/2)
  for(let i = arr.length-1; i>mid; i--){
    arr[i+1]=arr[i];
    if(i===mid + 1){
      arr[mid +1]= item
    }
  }
  return arr;
  }




