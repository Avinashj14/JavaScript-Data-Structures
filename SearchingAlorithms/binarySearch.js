// Iterative Binary Search
function iterativeBinarySearch(array, target) {
    let lookUp=0;
    let lowerBound = 0;
    let upperBound = array.length - 1;
  
    while (lowerBound <= upperBound) {
        lookUp++;
      const midpointIndex = Math.floor((lowerBound + upperBound) / 2);
      const midpointItem = array[midpointIndex];
  
      if (target === midpointItem) {
        return { midpointIndex: midpointIndex, lookUp: lookUp };
      }
  
      if (midpointItem < target) {
        lowerBound = midpointIndex + 1;
      } else if (midpointItem > target) {
        upperBound = midpointIndex - 1;
      }
    }
  
    return -1;
  }




  let array=[ 1,  2,  3,   4,  5,  6,  7,  8,  9, 10, 11, 12,13, 14, 15,  16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,  28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,  40];
  let target=38;

  console.log(iterativeBinarySearch(array, target))