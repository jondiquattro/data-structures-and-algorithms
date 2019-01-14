'use strict';

const SQClass = require('../queue-stack-class/queue-stack-class')

function matchingBrackets(str){
    let bool=true;
    let stack = new SQClass.StackClass;
    let current ='';

    for (let i = 0; i<str.length; i++){
      
      if(bool ===false){
        break;
      }
      if(current ==='('||current ==='['|| current ==='{'){
        stack.push(str[i]);
      }
      else if(current ===')'||current ===']'|| current ==='}'){
        if(stack.pop().value !== str[i]){
          bool = false;
          break;
        }
      }
    }//end for
    return bool;    

  }

  module.exports ={matchingBrackets};