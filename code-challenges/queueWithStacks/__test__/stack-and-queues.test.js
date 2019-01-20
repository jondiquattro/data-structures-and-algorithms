'use strict';
const stackAndQueue = require('../stack-queue-class/stacks-and-queues');

describe( 'stack and queues have the following methods', ()=>{
    describe('stack method push should be able to do the following', ()=>{
        it('should add things to the top of an empty stack', ()=>{

            let stack =new  stackAndQueue.StackClass();
            stack.push(4);
            expect(stack).toEqual({"length": 1, "nextInLine": null, "prevPush": {"next": null, "prev": null, "value": 4}});
        })
        it('should increment length when called', ()=>{
            let stack =new  stackAndQueue.StackClass();
            stack.push(1);
            stack.push(2);
            stack.push(3);
            stack.push(4);

            expect(stack.length).toEqual(4);
        })

        it('should utilize last in last out order', ()=>{
            let stack =new  stackAndQueue.StackClass();
            stack.push(1);
            stack.push(2);
            stack.push(3);
            stack.push(4);

            expect(stack.prevPush.value).toEqual(4);
        })
    })

    describe('the pop method can do the following:', ()=>{
        it('should return a null if the stack is empty', ()=>{
            let stack =new  stackAndQueue.StackClass();
            expect(stack.pop()).toEqual(null);

        })
        it('should return the last item pushed', ()=>{
            let stack =new  stackAndQueue.StackClass();
            stack.push(1);
            stack.push(2);
            stack.push(3);
            stack.push(4);

            expect(stack.pop()).toEqual(4);

        })
        it('should pop of until stack is empty', ()=>{
            let stack =new  stackAndQueue.StackClass();
            let firstIn = [];
            stack.push(1);
            stack.push(2);
            stack.push(3);
            stack.push(4);

            while(stack.length){
               firstIn.push(stack.pop());
            }

            expect(firstIn).toEqual([4,3,2,1]);
        })

    
    })
})

describe('Queue should contain the following methods ', ()=>{

    describe('the queue method should do this', ()=>{
        it('should add an item to an empty list', ()=>{

            let queue = new stackAndQueue.QueueClass();

            queue.queue(4);
            
            expect(queue.front.value).toEqual(4);
        })
        it('it should utilize first in last out order', ()=>{
            let queue = new stackAndQueue.QueueClass();

            queue.queue(1);
            queue.queue(2);
            queue.queue(3);
            queue.queue(4);

            expect(queue.front.value).toEqual(1);
        })
        it('should increment length property', ()=>{
            let queue = new stackAndQueue.QueueClass();

            queue.queue(1);
            queue.queue(2);
            queue.queue(3);
            queue.queue(4);

            expect(queue.length).toEqual(4);
        })
    })
    describe('dequeue should do the following', ()=>{
        it('should return null if list is empty', ()=>{
            let queue = new stackAndQueue.QueueClass();

            expect(queue.dequeue()).toEqual(null);
        })

        it('should return the first item queued', ()=>{
            let queue = new stackAndQueue.QueueClass();

            queue.queue(1);
            queue.queue(2);
            queue.queue(3);
            queue.queue(4);

            expect(queue.dequeue()).toEqual(1);
        })
        it('should should return the value of each item in the list while list has length ', ()=>{
            let queue = new stackAndQueue.QueueClass();
            const result = [];

            queue.queue(1);
            queue.queue(2);
            queue.queue(3);
            queue.queue(4);
            while(queue.length){
                result.push(queue.dequeue())
            }
            expect(result).toEqual([1,2,3,4]);
        })
    })


})