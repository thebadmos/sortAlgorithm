/*Implement bubble sort. Your function should accept an array and return an array of sorted values. */
function bubbleSort(arr){
    for (let i = 0; i <arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
    return arr;
};


/*Implement selection sort. Your function should accept an array and return an array of sorted values.
 */
function selectionSort(arr, compare_Function) {

    function compare(a, b) {
     return a - b;
     } 

     var min = 0;
     var index = 0;
     var temp = 0;
   //{Function} compare_Function Compare function
    compare_Function = compare_Function || compare;
  
    for (var i = 0; i < arr.length; i += 1) {
      index = i;
      min = arr[i];
  
      for (var j = i + 1; j < arr.length; j += 1) {
        if (compare_Function(min, arr[j]) > 0) {
          min = arr[j];
          index = j;
        }
      }
  
      temp = arr[i];
      arr[i] = min;
      arr[index] = temp;
    }
  
    //return sorted arr
    return arr;
  }

  /*Implement insertion sort. Your function should accept an array and return an array of sorted values.*/
  function insertionSort(arr){
    for (let i = 1; i < arr.length; i++) {
      let j = i - 1
      let temp = arr[i]
      while (j >= 0 && arr[j] > temp) {
        arr[j + 1] = arr[j]
        j--
      }
      arr[j+1] = temp
    }
    return arr;
  }


  /*Implement merge sort. Your function should accept an array and return an array of sorted values. You can solve this iteratively or recursively. */
  function merge(arr1,arr2) {
    const arr = [...arr1,...arr2];
  return bubbleSort(arr);
}

function mergeSort(array) {
    if(array.length <= 1) {
        return array;
    } 
    let midPoint = Math.floor(array.length/2);
    let leftArray = mergeSort(array.slice(0,midPoint));
    let rightArray = mergeSort(array.slice(midPoint));

    return merge(leftArray,rightArray);
}

/*Implement quick sort. Your function should accept an array and return an array of sorted values. You can solve this iteratively or recursively. */

function swap(arr, x, y) {
    [arr[x], arr[y]] = [arr[y], arr[x]];
  }

  //Pivot function returns the fixed pivot point
  function pivot(arr, left = 0, right = arr.length - 1) {
    let shift = left;
    for (let i = left + 1; i <= right; i++) {
      //Move all the small elements on the left side
      if (arr[i] < arr[left]){
          shift++;
        swap(arr, i, shift);
      } 
    }

    //Finally swapping the last element with the left
    swap(arr, left, shift);
    return shift;
  }

  function quickSort(array, left = 0, right = array.length - 1) {
    if (left < right) {
      let pivotIndex = pivot(array, left, right);

      //Recusrively calling the function to the left of the pivot and to the right of the pivot
      quickSort(array, left, pivotIndex - 1);
      quickSort(array, pivotIndex + 1, right);
    }
    return array;
  } 