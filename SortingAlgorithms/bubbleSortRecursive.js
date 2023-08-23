

let countLoopRun = 0;
function recursiveBubbleSort(data, count) {
  if (count == 1) {
    return countLoopRun;
  }
  
  for (let i = 0; i < count - 1; i++) {
    if (data[i] > data[i + 1]) {
      let temp = data[i];
      data[i] = data[i + 1];
      data[i + 1] = temp;
      countLoopRun++;
    }
  }
  recursiveBubbleSort(data,count-1)
}
let arr = [64, 34, 25, 12];
recursiveBubbleSort(arr, arr.length)
console.warn(arr)
console.warn(countLoopRun)