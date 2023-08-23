function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

   // const pivot = arr[Math.floor(arr.length / 2)];//pivot is median
    const pivot = arr[arr.length-1];//pivot is last
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else if (arr[i] > pivot) {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = quickSort(unsortedArray);

console.log("Unsorted Array:", unsortedArray);
console.log("Sorted Array using Quick Sort:", sortedArray);