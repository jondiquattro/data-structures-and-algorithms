https://github.com/jondiquattro/data-structures-and-algorithms/pull/22

# Stacks and Queues
stackAndQueues.js contains a stack class with the following methods:
push() adds a node to the stack
pop() removes the top node
peek() returns the top value but does not alter the stack

## Challenge
Write a stacks and queues classes with full functionality using linked lists

## Approach & Efficiency
My approach for the stack was to use a prev that every time a new node was created would point at the last node that was created.
this allowed for a space complexity of O(1) and a time complexity of O(1) for any of the operations.
