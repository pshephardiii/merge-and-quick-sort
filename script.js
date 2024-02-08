function mergeSort(arr) {
  
  if (arr.length <= 1) {
    return arr
  }
    
  let halfArr = Math.floor(arr.length / 2)
    
  let leftHalf = mergeSort(arr.slice(0, halfArr))
  let rightHalf = mergeSort(arr.slice(halfArr))
    
  return merge(leftHalf, rightHalf)
}

// HELPER FUNCTION: merge two sorted arrays
function merge(arr1, arr2) {
  let result = []
  
  while (arr1.length && arr2.length) {
    if(arr1[0] <= arr2[0]) {
      result.push(arr1.shift());
    } else {
      result.push(arr2.shift());
    }
  }
  
  return result.concat(arr1, arr2);
}
  
function quickSort(arr){
  if (arr.length <= 1) {
    return arr
  }
  let pivot = arr[0]
  let leftArr = []
  let rightArr = []
  let result = []
    
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i])
    } else {
      rightArr.push(arr[i])
    }
  }
  return result.concat(quickSort(leftArr), pivot, quickSort(rightArr))
}
  