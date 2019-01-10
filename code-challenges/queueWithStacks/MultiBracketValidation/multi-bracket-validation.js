function matchingBrackets(str){
    let bool=false;
    let arr = str.split('');
    let stack = new Stack();
    let queue= new PsuedoQueue;
  
    for(let i = 0; i<arr.length; i++){
      if(arr[i]==='{'||arr[i] ==='['||arr[i]==='('){
        stack.push(arr[i]);
      }
      else if (arr[i]==='}'||arr[i] ===']'||arr[i]===')'){
        queue.enqueue(arr[i]);
      }
    }
    let topS;
    let frontQ;
    if(stack.length === queue.length){
        while(stack.length !==0){
      topS = stack.pop();
      frontQ=queue.enqueue();
      if(topS ==='('&&frontQ===')'||topS ==='['&&frontQ===']' ||topS ==='{'&&frontQ==='}'){
        bool = true;
      }
      else {bool = false;
      break;
      };
    }
    }
    return bool;
  }