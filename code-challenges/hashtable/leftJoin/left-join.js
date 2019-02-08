
'use strict';



function leftJoin(left, right) {
    let result = [];
// console.log(left.map.length);

    for (let i = 0; i < left.map.length; i++) {
        let current = [];
      
        if(left.map[i]){

            if (right.contains(left.map[i].head.value.key)) {
                // console.log(left.map[i].head.value.key)
                let key =left.map[i].head.value.key; 

                let ri = right.hash(key);
                // console.log(right.map[ri]);

                current.push([left.map[i].head.value.key, left.map[i].head.value.value, right.map[ri].head.value.key]);
    
            }
            else { current.push([left.map[i].head.value.key, left.map[i].head.value.value, null]) };
            result.push(...current);
        }

    }
    return result;
}


module.exports = leftJoin;