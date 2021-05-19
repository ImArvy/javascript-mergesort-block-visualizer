function mergeSort(arrayToMerge) { // Create a merge sort function that has an array as a parameter.
    if(arrayToMerge.length == 1) { // Base case(if the array has only one element).
        return arrayToMerge; // Return the array as it is already "sorted".
    }
    const middleIndex = arrayToMerge.length / 2; // The middle index is found by dividing the original array by 2.
    const firstHalf = mergeSort(arrayToMerge.slice(0, middleIndex)); // The first half is found using slice method to return range from 0 to middle index.
    const secondHalf = mergeSort(arrayToMerge.slice(middleIndex)); // The second half is found using slice method to return range from middle index until the last element of the array.
    const sortedArray = []; // Create an empty array that will contain sorted values after merge sort algorithm.
    let i=0, j=0; // i and j are used to keep track indices of left and right sub array, respectively.
    while(i < firstHalf.length && j < secondHalf.length) { // While the current index has not exceeded the length of either sub array.
        if(firstHalf[i] < secondHalf[j]) { // If element in left sub array is less than element in right sub array.
            sortedArray.push(firstHalf[i++]); // Push element of left sub array to the sorted array, then move to the next index in first half.
        } else { // Otherwise
            sortedArray.push(secondHalf[j++]); // Push element of right sub array to the sorted array, then move to the next index in the second half.
        }
    }
    while(i < firstHalf.length) { // While we are not at the end of the first sub array.
        sortedArray.push(firstHalf[i++]); // Push element of left sub array to the sorted array, then move to the next index in first half.
    }
    while(j < secondHalf.length) { // While we are not at the end of the second sub array.
        sortedArray.push(secondHalf[j++]); // Push element of right sub array to the sorted array, then move to the next index in the second half.
    }
    return sortedArray; // Return the now sorted array.
}

var testArray2 = [14]; // Create array to test the base case of merge sort.
console.log(mergeSort(testArray2)); // Pass array as an argument to mergeSort function and print result to the terminal.

var testArray = [4, 8, 7, 2, 11, 1, 3, 10, 12, 17, 22]; // Create array to test the merge sort logic.
console.log(mergeSort(testArray)); // Pass array as an argument to mergeSort function and print result to the terminal.