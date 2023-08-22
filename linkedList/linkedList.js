//10--->16--->20

// let linkedList={
//     head:{
//         value:10,
//         next:{
//             value:15,
//             next:{
//                 value:20,
//                 next:null
//             }
//         }
//     },

// }

class linkedList {
  constructor(data) {
    this.head = {
      value: data,
      next: null
    };
    this.tail=this.head
  }
  /// insert data
  append(data){
    const newNode={
        value:data,
        next:null
    }
    this.tail.next=newNode;
    this.tail=newNode;
    
  }

/// Prepend data
prepend(data){
    const newNode={
        value:data,
        next:null
    }
    newNode.next=this.head;
    this.head=newNode;
    
  }

//insert data in between

//1. iterate throuh link list to get data og the required index
traverse(x){
    let counter=0;
    let currentNode=this.head;
    while(counter != x){
        counter++;
        currentNode=currentNode.next;
    }
    return currentNode;
}

//now insert by index data that we have got through traversing through the linkedList
insert(index,data){
    const newNode={
        value:data,
        next:null
    }
   const leaderNode= this.traverse(index-1);
   const nextNode=leaderNode.next;

   leaderNode.next=newNode;
   newNode.next=nextNode;

}


//delete
delete(index){
    const leaderNode= this.traverse(index-1);
    const unwantedNode=leaderNode.next;
    const nextNode=unwantedNode.next;
    leaderNode.next=nextNode;
}


reverse(){
let first=this.head;
let tail=this.head;// head ko tail m convert karege
let second=first.next;
while(second){
    let temp=second.next;
    second.next=first;
    first=second;
    second=temp;
}
this.head.next=null;   /// tail null rehtii h to ab this.head ko null karegee 
this.head=first

}

//print list
printList() {
    const values = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      values.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(values.join(" -> "));
  }

}



linkedList= new linkedList(10)
linkedList.append(20)
linkedList.prepend(5)
linkedList.insert(2,15)
linkedList.delete(2)
linkedList.reverse()


console.log(linkedList)
linkedList.printList()
