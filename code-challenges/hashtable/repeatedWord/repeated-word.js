'use strict';

const Hash = require('../hashtable.js');

function occursTwice(str){

let word = '';
let hash = new Hash(1044);

for (let i = 0; i<str.length; i ++){
    if(str[i]!== ''){
        while(str[i] !==''){
            word += str[i];
            i ++;
        }
        
        if(hash.has(word)){return word}
        else{
            hash.add(word);
        }
        word = '';
    }
}
return 'No repeats'

}

console.log(occursTwice('two for two dollars'));