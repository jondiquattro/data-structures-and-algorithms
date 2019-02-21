# Breadth-First Traversal of a Graph
Write a method that traverses a graph using a breadth first search

## Challenge
The challenge is to write a breadth first search that accounts for any visited nodes so that in the event od a cycle it does not enter an infinite loop.

## Approach & Efficiency
My approach was to queue up each the starting node and dequeue it and set a porperty on it called visited to true, and then check if it has any connected nodes which are then enqueued as long as the visted property does note equal true, this process is repeated as long as the queue has a length.

this results in a space of O(w) and time complexity of O(n).

## Solution
Image url https://photos.app.goo.gl/5XEd4cPayAjuvftC9