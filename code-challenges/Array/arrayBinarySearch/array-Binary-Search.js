'use strict'
console.log('being called by test')

function binarySearch(arr, key){
  let count = 0;
  let midIdx = Math.floor(arr.length/2);

  let botMid = function (midIdx){
    midIdx = Math.floor(midIdx/2)
  }

  let topMid = function(midIdx){
    midIdx=midIdx(Math.floor((arr.length - midIdx)/2))
  }

  while(key !==arr[midIdx]){
    console.log('count ', count)
    if (key ===arr[midIdx] || key === arr[midIdx + 1]){
      return midIdx;
    }
    else if(key<arr[midIdx]) {
      botMid(midIdx)
    }
    else if(key > arr[midIdx]){
      topMid(midIdx)
    }
    else {return -1}
    count ++;
    if(count > arr.length/2){
      return -1
      break;
      
    }
    
  }
}
