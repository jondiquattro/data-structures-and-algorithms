
'use strict';



function FizzBuzz(root) {


    function _walk(node) {
        
        if (node.left) {

            if ((node.left.value % 3 === 0) && (node.left.value % 5 === 0)) {
                node.left.value = 'FizzBuzz';
            }
            else if (node.left.value % 3 === 0) {
                node.left.value = 'Fizz';
            }
            else if (node.left.value%5 ===0) {
                node.left.value = 'Buzz'
            }
            
            _walk(node.left);

        }
        if (node.right) {
            if ((node.right.value % 3 === 0) && (node.right.value % 5 === 0)) {
                node.right.value = 'FizzBuzz';
            }
            else if (node.right.value % 3 === 0) {
                node.right.value = 'Fizz';
            }
            else if (node.right.value % 5===0) {
                node.right.value = 'Buzz'
            }
            _walk(node.right);

        }

    }//end _walk

    

    if ((root.value % 3 === 0) && (root.value % 5 === 0)) {
        root.value = 'FizzBuzz';
    }
    else if (root.value % 3 === 0){
        root.value = 'Fizz';
    }
    else if (root.value%5 ===0){
        root.value = 'Buzz';
    }
    _walk(root);


}


module.exports = FizzBuzz;