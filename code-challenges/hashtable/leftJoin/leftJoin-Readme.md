# Hashmap LEFT JOIN
Create a function that takes in two hash tables and returns a new data structure containing the all key and value pairs of the left table + all the keys from the right hash that match on key of left list.

## Challenge
The challenge is figuring out how to add all of the values from the left hash and the values from the right hash that match.

## Approach & Efficiency
We approached the problem by iterating over the left hash and checking if right hash contains the left key values. Space was O(n) since we returned an array containing Left + right hashes. Time was O(n) since we got an O(1) look up + O(n) from iterating the left hash which equals O(1)+O(n) => O(n).

## Solution
https://photos.app.goo.gl/WKuQxhZaL26cLB9F6
