function selectionSort(arr) {
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
      

           // [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // Swap elements  by destructuring

let temp =arr[minIndex];
arr[minIndex]=arr[i];
arr[i]=temp;




       
    }
    return arr;
}

const unsortedArray = [11,64, 34, 25, 12, 22, 90];



console.log("Unsorted Array:", unsortedArray);
console.log("Sorted Array:",selectionSort(unsortedArray));