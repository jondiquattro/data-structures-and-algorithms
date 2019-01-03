'use strict'
 //12

function binarySearch(arr, key){
  let count = 0;
  let midIdx = Math.floor(arr.length/2); //3

  let botMid = function (val){
    midIdx = Math.floor(midIdx/2)
    return midIdx;

  }

  let topMid = function(val){
    midIdx = midIdx +Math.floor(((arr.length-1) - midIdx)/2)
    return midIdx

  }

  while( (count < Math.floor(arr.length/2)) ){
    count ++;
    if (key ===arr[midIdx] || key === arr[midIdx + 1]){
      if(key === arr[midIdx]){return midIdx}
      else{ return midIdx+1 }
    }
    else if(key<arr[midIdx]) {
      botMid(midIdx)
    }
    else if(key > arr[midIdx]){
      topMid(midIdx)
    }
    else {return -1}

  }
}

module.exports = {binarySearch};
