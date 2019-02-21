# Radix Sort
The radix/bucket sort (also known as a pidgeon hole) creates looks at the range of possible values in an array and then creates buckets depending on the particuler flavor of radix sort. then it loops through the array and puts each item into one of the buckets resulting in a sorted array.

## Challenge
determine how many buckets to create, we decided to create a hash for each possible value and then iterate the hash and add the sorted value to the array.

## Approach & Efficiency
The time complexity is O(n);
the space complexity is O(max) where max is the largest value in the array.

## Solution
Image is located at:
https://photos.app.goo.gl/ZrxPhMQqmeFH8xRV8