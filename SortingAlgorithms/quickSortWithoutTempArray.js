function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left >= right) {
        return;
    }

    const pivotIndex = partition(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
}

function partition(arr, left, right) {
    const pivot = arr[right]; // Choose pivot as the last element
    let i = left - 1;

    for (let j = left; j < right; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
    return i + 1;
}

const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
quickSort(unsortedArray);

console.log("Sorted Array using Quick Sort:", unsortedArray);


// function quickSort(arr, left = 0, right = arr.length - 1) {
//     if (left >= right) {
//         return;
//     }

//     const pivot = arr[Math.floor((left + right) / 2)];
//     const index = partition(arr, left, right, pivot);

//     quickSort(arr, left, index - 1);
//     quickSort(arr, index, right);
// }

// function partition(arr, left, right, pivot) {
//     while (left <= right) {
//         while (arr[left] < pivot) {
//             left++;
//         }
//         while (arr[right] > pivot) {
//             right--;
//         }
//         if (left <= right) {
//             [arr[left], arr[right]] = [arr[right], arr[left]];
//             left++;
//             right--;
//         }
//     }
//     return left;
// }

// const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
// quickSort(unsortedArray);

// console.log("Sorted Array using Quick Sort:", unsortedArray);
