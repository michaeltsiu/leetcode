// You are given two arrays and an index.

// Copy each element of the first array into the second array, in order.

// Begin inserting elements at index n of the second array.

// Return the resulting array. The input arrays should remain the same after the function runs.

function frankenSplice(arr1, arr2, n) {
  // create a shallow copy of arr2
  let result = arr2.slice();
  // iterate over arr1
  for (let i = 0; i < arr1.length; i++) {
    // splice at n, deleting 0, and adding the current value of arr1
    result.splice(n, 0, arr1[i])
    // increment n to match with the place of arr1
    n++
  }
  // return the result
  return result
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
