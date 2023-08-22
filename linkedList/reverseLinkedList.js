class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  // Function to reverse a linked list
  const reverseLinkedList = (head) => {
    let prev = null;
    let current = head;
    let next = null;
  
    while (current !== null) {
      next = current.next; // Store the next node
      current.next = prev; // Change the next of the current node to the previous node
      prev = current; // Move prev to the current node
      current = next; // Move current to the next node
    }
  
    return prev; // New head of the reversed linked list
  };
  
  // Function to print the linked list
  const printLinkedList = (head) => {
    const values = [];
    let current = head;
    while (current !== null) {
      values.push(current.data);
      current = current.next;
    }
    console.log(values.join(" -> "));
  };
  
  // Example usage
  const head = new Node(42);
  head.next = new Node(52);
  head.next.next = new Node(4);
  head.next.next.next = new Node(6);
  head.next.next.next.next = new Node(1);
  head.next.next.next.next.next = new Node(9000);
  
  console.log("Original Linked List:");
  printLinkedList(head);
  
  const reversedHead = reverseLinkedList(head);
  
  console.log("Reversed Linked List:");
  printLinkedList(reversedHead);
  
  