class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// O(1) prepend
const prepend = (head, data) => {
  // Create a new node to prepend
  const prependedNode = new Node(data);
  // Set its next to the current node
  prependedNode.next = head;

  // Return our new node
  return prependedNode;
};

// O(n) append
const append = (head, data) => {
  // Create a new node to append
  const appendedNode = new Node(data);
  // Start at the current node which is the head
  let currentNode = head;

  // Iterate through our list until we reach the last node
  while (currentNode.next !== null) {
    // Step through nodes
    currentNode = currentNode.next;
  }

  currentNode.next = appendedNode;

  // Return our new node
  return head;
};

// The input is the index number, and the output will be the head node.
const deleteNode = (head, index)=> {
  // If we want to delete the current head node,
  // we just return the node after the current head.
  if (index === 0) {
    return head.next;
  }

  let precedingNode = head;

  // Find the node that precedes the index of the node that we want to delete
  for (let i = 0; i < index - 1; i++) {
    precedingNode = precedingNode.next;
  }

  // Skip past our node to be removed
  // Equivalent to precedingNode.next = precedingNode.next.next
  const nodeToBeRemoved = precedingNode.next;
  precedingNode.next = nodeToBeRemoved.next;

  // There are now no nodes in the linked list that are pointing to nodeToBeRemoved.
  // The node that was before it is now pointing to the one after it.

  return head;
};

//insert

const insertNode = (head, index, value) => {
  // First check if we want to add a node at the head
  if (index === 0) {
    // Inserting at 0 is equivalent to prepending
    return prepend(head, value);
  }

  // Create the node we want to insert
  const insertedNode = new Node(value);
  let precedingNode = head;

  // Find the node that precedes the index of the node that we want to insert
  for (let i = 0; i < index - 1; i++) {
    precedingNode = precedingNode.next;
  }

  // Store the node that should come after the one we insert
  const nodeAfterInserted = precedingNode.next;

  // Insert our new node at the desired index
  precedingNode.next = insertedNode;

  // Set the inserted node's `next` pointer
  insertedNode.next = nodeAfterInserted;

  return head;
};

let head = new Node(42);
 head.next = new Node(9000);
 head.next.next = new Node(10);
head.next.next.next = new Node(20);
// 42 -> 9000 -> 10 -> 20

prepend(head, 8);
// 48 -> 2 -> 9000 -> 10 -> 20

append(head, 8);
// 42 -> 9000 -> 10 -> 20 -> 8

deleteNode(head, 2);
// 42 -> 9000 -> 20

deleteNode(head, 0);
// 9000 -> 20

insertNode(head, 2, 777);
// 42 -> 9000 -> 777 -> 10 -> 20

console.log(head);
