# TIPS - Binary Search Trees

For this challenge, you'll be implementing some of the basic functionality of a Binary Search Tree!

Your job is to fill out the `addValue` and `printSortedValues` functions in the `binary-search-tree.js` file. All of the js files are included in the `index.html`, so feel free to open it in your browser and test your code in the console. There is also an `index.js` file for you to write any test code/seed data.

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

Insert 3:
	1. 3 < 4, so go left
	2. 3 > 2, so go right
			4
		/   \
	 2     10
		\   /
		 3 9

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
```

