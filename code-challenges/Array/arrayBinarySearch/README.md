# Binary Search
Take a value and and array and return the index of the value or -1 if it is not in array.

## Challenge
The challenge was to figure out how to break from a while loop, and manage the edge cases.

## Approach & Efficiency
Our approach was to use a while loop with two functions, a bottomSearch and a topSearch which we called based on a comparison between mid and the target value.

Space is O(1), while time complexity is O log(n) since we ar only searching half the array each time.

## Solution
