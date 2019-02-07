# Hashtables
This class stores key and value pairs and utilizes an O(1) look up to pull values based on hashed keys

## Challenge
Create a class that uses O(1) look up, and be able to retun a value based on the a given key.


## Approach & Efficiency
space is O(size) and time is O(1), since I am using a key and value pair and hashing the key which then becomes a node inside of the array, it allows me to get an O(1) lookup.

## API
-set(key,value) puts a key and value pair into the set.
-contains(key) checks if a value is in the set and returns true or false
-hash(key) converts strings to a repeatable integer
-get(key) pulls the value match to the entered key from the set using O(1)