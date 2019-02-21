# Find Edges
write a function that takes in a graph and cities and determines if there is a direct route between the cities and returns either true and cost or false and 0;

## Challenge
The challenge for me was figuring out how to access values in a graph and how to determine if two nodes share and edge, or if three nodes have a common edge.

## Approach & Efficiency
I looped over the array of city objects and and pulled the edges for each one, I then pushed the node into an array if it had an edge with any of the other city nodes. I then checked the length of the edge array compared to the city array which would be equal in length if there is a direct path available. Time was O(n)^2 and space was O(n).

## Solution
image url is:
https://photos.app.goo.gl/oYJNXcWFqmfn1FBk7 and https://photos.app.goo.gl/ZarXF1f5tA9eArr18
