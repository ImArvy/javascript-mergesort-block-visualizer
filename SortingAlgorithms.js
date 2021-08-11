/*export const mergeSort = array => { // Create a merge sort function that has an array as a parameter.
    if(array.length === 1) { // Base case(if the array has only one element).
        return array; // Return the array as it is already "sorted".
    }
    const middleIndex = array.length / 2; // The middle index is found by dividing the original array by 2.
    const left = mergeSort(array.slice(0, middleIndex)); // The first half is found using slice method to return range from 0 to middle index.
    const right = mergeSort(array.slice(middleIndex)); // The second half is found using slice method to return range from middle index until the last element of the array.
    const sortedArray = []; // Create an empty array that will contain sorted values after merge sort algorithm.
    let i=0, j=0; // i and j are used to keep track indices of left and right sub array, respectively.
    while(i < left.length && j < right.length) { // While the current index has not exceeded the length of either sub array.
        if(left[i] < right[j]) { // If element in left sub array is less than element in right sub array.
            sortedArray.push(left[i++]); // Push element of left sub array to the sorted array, then move to the next index in first half.
        } else { // Otherwise
            sortedArray.push(right[j++]); // Push element of right sub array to the sorted array, then move to the next index in the second half.
        }
    }
    while(i < left.length) { // While we are not at the end of the first sub array.
        sortedArray.push(left[i++]); // Push element of left sub array to the sorted array, then move to the next index in first half.
    }
    while(j < right.length) { // While we are not at the end of the second sub array.
        sortedArray.push(right[j++]); // Push element of right sub array to the sorted array, then move to the next index in the second half.
    }
    return sortedArray; // Return the now sorted array.
};*/

export function getMergeSortAnimations(array) {
    const animations = [];
    if(array.length <= 1) {
        return array;
    }
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
}

function mergeSortHelper(
    mainArray, 
    startIdx,
    endIdx,
    auxiliaryArray,
    animations,
) {
    if(startIdx === endIdx) {
        return;
    }
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(
    mainArray,
    startIdx,
    middleIdx,
    endIdx,
    auxiliaryArray, 
    animations,
) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    // While we are within the array.
    while(i <= middleIdx && j <= endIdx) {
        // These are the values we are comparing : we push them once to change their color.
        animations.push([i, j]); 
        // We then push them again to change them back to their original color.
        animations.push([i, j]);
        if(auxiliaryArray[i] <= auxiliaryArray[j]) {
            // We overwrite the value at index k in the main array with the value at index i in the auxiliary array.
            animations.push([k, auxiliaryArray[i]]);
            mainArray[k++] = auxiliaryArray[i++];
        } else {
            // We overwrite the value at index k in the main array with the value at index j in the auxiliary array.
            animations.push([k, auxiliaryArray[j]]);
            mainArray[k++] = auxiliaryArray[j++];
        }
    }
    // While we are in the first half of the array.
    while(i <= middleIdx) {
        // These are the values we are comparing : we push them once to change their color.
        animations.push([i, i]);
        // We then push them again to change them back to their original color.
        animations.push([i, i]);
        // We overwrite the value at index k in the main array with the value at index i in the auxiliary array.
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
    }
    // While we are in the second half of the array.
    while(j <= endIdx) {
        // These are the values we are comparing : we push them once to change their color.
        animations.push([j, j]);
        // We then push them again to change them back to their original color.
        animations.push([j, j]);
        // We overwrite the value at index k in the main array with the value at index j in the auxiliary array.
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
    }
}