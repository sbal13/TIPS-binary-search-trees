# TIPS - Binary Search Trees

For this challenge, you'll be implementing some of the basic functionality of a Binary Search Tree!

Your job is to fill out the `addValue` and `printSortedValues` functions in the `binary-search-tree.js` file. 

## What you're given

1. A basic skeleton of a binary search tree in `binary-search-tree.js`
2. A function that creates nodes in `node.js`. Notice that it returns an object with three keys:
value, left, and right
3. An `index.js` for writing test code and seed data
4. An `index.html` that you can open in your browser for testing in your console. All the `.js` files are required, so don't worry about any setup

## What is a Binary Tree?

A binary tree is a data structure composed of connected nodes. A node contains three pieces of information: the value stored at that node and 2 children nodes, one left, and one right. 

This might look like the following

```
         2
      /     \
    10       4
   /  \     / 
 15    3  18
```

In the above diagram, the top-most node (also referred to as the "root" node) contains a value of 2, and its left child is a node containing the value 10, while its right is a node containing the value 4. The node storing 4 has one child containing 18 , while 10 has a left child node containing 15, and a right child node containing 3. Nodes containing 15 and 3 have no children.

## What is a Binary *Search* Tree?

A binary *search* tree is a special type of binary tree in which all the descendents on the left side of a node are less than the parent while all the descendents on the right side are greater than the parent. 

When nodes are inserted, their values are compared to a node's value and will go left if less or go right if greater. Values will "fall" down the tree until either a node with a matching value is found (in this case, there is no insertion), or the node finds an "end" of the graph and inserts itself in that place

Consider inserting nodes in this order:

4 > 2 > 10 > 9 > 3 > 5


```
Insert 4 at root:
4

Insert 2:
1. 2 < 4, so go left
     4
    /
   2

Insert 10:
1.10 > 4, so go right
     4
    / \
   2  10

Insert 9 :
1. 9 > 4, so go right
2. 9 < 10, so go left
      4
    /   \
   2     10
        /
       9

Notice that 9 "falls" down the tree, passing through 4 since it already has a child to the right and inserting itself as the left child of 10

Insert 3:
1. 3 < 4, so go left
2. 3 > 2, so go right
      4
    /   \
   2     10
    \   /
     3 9

Notice that 3 "falls" down the tree, passing through 4 since it already has a child to the right and inserting itself as the right child of 2

Insert 5:
1. 5 > 4, so go right
2. 5 < 10, so go left
3. 5 < 9, so go left

       4
    /     \
   2       10
    \     /
     3   9
        /
       5

Notice that 5 "falls" down the tree, passing through 4 since it already has a child to the right, then passing through 10 since it has a left child, then inserting itself as the left child of 9
```

