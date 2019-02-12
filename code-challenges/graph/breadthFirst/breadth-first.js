'use strict';
breadthSearch(node){
    let breadth = [];
    let result = [];
    breadth.push(node);
    // console.log(breadth)

    while(breadth.length){

      // console.log(result);
      let cur = breadth.pop();
      console.log('current',cur);

      if(!cur.touched) {result.push(cur);}
      cur.touched = true;
      console.log('result',result)
      
      let neighbors = this.getNeighbors(cur);
      // console.log(result)

      if(neighbors.length){
        for (let i = 0; i<neighbors.length; i++){
          breadth.push(neighbors[i]);
        }
  
      }//end if
          
        }
    return result;
      
    }
