'use strict';


function (t1, t2){
    let iArr =[];
    let hash = new Hash(1024);
    let qArr =[t1.root];

    while(qArr){
        let node= qArr.shift();

        if(node.left){
            qArr.push(node.left)
        }
        if(node.right){
            qArr.push(node.right)
        }
        hash.add(node.value)
    }

    qArr=[t2.root];
    while(qArr){
        node = qArr.shift();
        if(node.left){
            qArr.push(node.left)
        }
        if(node.right){
            qArr.push(node.right)
        }
        if(hash.contains(node.value)){
            iArr.push(node.value)
        }
    }

}