

# First repeated word
Create a function that takes in a string, and is able to return the first word that repeats itself.

## Challenge


## Approach & Efficiency
My approach was to use a hashmap to hold each word so that when I had to check it for repeats I could get an O(1) look up. The time still ended up as O(n) where n is the number of letter in the string.
the space ended up being O(size) best case and O(W) worst case where W = words.

## Solution
WhiteBoard
https://photos.app.goo.gl/FKfWyBExqr8zi9ny6