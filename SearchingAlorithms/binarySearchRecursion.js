function recursiveBinarySearch(array, target, lowerBound, upperBound) {
    // Base case 1: element not found
    if (lowerBound > upperBound) {
      return -1;
    }
  
    const midpointIndex = Math.floor((lowerBound + upperBound) / 2);
    const midpointItem = array[midpointIndex];
  
    // Base case 2: target found
    if (midpointItem === target) {
      return midpointIndex;
    }
  
  
    // Recursive case: tighten your bounds based on target location
    if (midpointItem < target) {
      return recursiveBinarySearch(array, target, midpointIndex + 1, upperBound);
    }
  
    if (midpointItem > target) {
      return recursiveBinarySearch(array, target, lowerBound, midpointIndex - 1);
    }
  
    return -1;
  }


  let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  let target = 12;
  
  // Call the recursiveBinarySearch function
  let result = recursiveBinarySearch(array, target, 0, array.length - 1);
  
  // Log the result
  console.log("Target found at index:", result);