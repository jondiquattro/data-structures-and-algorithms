'use strict'

let arr =[1,2,3,4,5]


function reverseArray(arr){

    let result = [];
    for(let i =0; i<arr.length; i++){

        result.unshift(arr[i]);
    }
    return result;
}