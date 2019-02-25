// class BinarySearchTree {
// 	constructor(){
// 		this.root = null
// 	}

// 	addValue(value){
// 		// Given a value, creates a Node to store that 
// 		// value, then finds the appropriate place 
// 		// in the tree to insert that node

// 		const node = new Node(value)

// 		// If it is the first node in the tree, should 
// 		// set the `this.root` equal to that node
// 	}

// 	printSortedValues(){
// 		// This function should print out all values 
// 		// within this tree in sorted order
// 	}
// }

function createTree() {
	function addValue(value){
		// Given a value, creates a Node to store that 
		// value, then finds the appropriate place 
		// in the tree to insert that node

		const node = createNode(value)

		// If it is the first node in the tree, should 
		// set the `this.root` equal to that node
	}

	function printSortedValues(){
		// This function should print out all values 
		// within this tree in sorted order
	}

	return {
		root: null,
		addValue: addValue,
		printSortedValues: printSortedValues
	}
}