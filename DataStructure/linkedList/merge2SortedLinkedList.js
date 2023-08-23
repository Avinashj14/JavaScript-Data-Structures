// Given the head nodes of two blockchains (represented as linked lists) sorted by a timestamp property, write a function combineBlockchains 
//that returns the head node of a merged linked list that is sorted by timestamp in ascending order.
// class Node {
//   constructor(timestamp) {
//     this.timestamp = timestamp;
//     this.next = null;
//   }
// }
// // Input
// const skilledChainHead = new Node(42);      // skilledChainHead.next = new Node(159);   //// 42--->159

// const devCoinHead = new Node(123);           // devCoinHead.next = new Node(482);      ////123-->482


// // Output: combineBlockchains(skilledChainHead, devCoinHead)
// 42 -> 123 -> 159 -> 482 // ... and so on



class Node {
  constructor(timestamp) {
    this.timestamp = timestamp;
    this.next = null;
  }
}

const combineBlockchains = (chainHead1, chainHead2) => {
  // Store the head of the first item in the combined chain
  const resultHead =
    chainHead1.timestamp < chainHead2.timestamp ? chainHead1 : chainHead2;
  // Init the combined list with the first item
  let combinedTail = resultHead;
  let currentNode1 = chainHead1;
  let currentNode2 = chainHead2;

  // Move the node forward that was already added to our resultHead
  if (chainHead1.timestamp < chainHead2.timestamp) {
    currentNode1 = currentNode1.next;
  } else {
    currentNode2 = currentNode2.next;
  }

  // We iterate through until one of the linked lists has been depleted
  while (currentNode1 !== null && currentNode2 !== null) {
    // In either case, we do the same thing.
    // We attach the node to our combined list,
    // and then we move forward in the contributed chain's list
    if (currentNode1.timestamp < currentNode2.timestamp) {
      combinedTail.next = currentNode1;
      currentNode1 = currentNode1.next;
    } else {
      combinedTail.next = currentNode2;
      currentNode2 = currentNode2.next;
    }

    // Move to the new tail in the combined chain
    combinedTail = combinedTail.next;
  }

  // One of the chains has been depleted (reached null)
  // The other has it's remaining items in sorted order,
  // so we can just set the next value of our
  // combined list to the non-null node
  combinedTail.next = currentNode1 || currentNode2;

  // ^ NOTE: We use || above which is a short circuit evalution.
  // If currentNode1 has a value, it will be the `next`,
  // otherwise it will yield to currentNode2

  return resultHead;
};








// Example input
const skilledChainHead = new Node(42);
skilledChainHead.next = new Node(159);
// 42--->159

const devCoinHead = new Node(123);
devCoinHead.next = new Node(482);
//123-->482

// Merge the two linked lists
const mergedHead = combineBlockchains(skilledChainHead, devCoinHead);

// Print the merged linked list
let current = mergedHead;
while (current !== null) {
  console.log(current.timestamp);
  current = current.next;
}

//output
//42-->123-->159-->482
