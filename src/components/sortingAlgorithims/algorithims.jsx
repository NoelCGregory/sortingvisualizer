export const selectionSortAlgorithim = (array) => {
  let animation = [];
  for (let i = 0; i < array.length; i++) {
    let index = i;
    for (let j = i; j < array.length; j++) {
      animation.push([index, j]);
      if (array[index] > array[j]) {
        index = j;
      }
    }
    let temp = array[i];
    array[i] = array[index];
    array[index] = temp;

    animation.push([index, i, array[i], array[index]]);
  }
  return animation;
};
export const bubbleSortAlgorithim = (arr) => {
  let animation = [];
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length - i - 1; j++) {
      animation.push([j + 1, j]);
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        animation.push([j + 1, j, arr[j], arr[j + 1]]);
      }
    }
  }
  return animation;
};
function merge(arr, l, m, r, animation) {
  var n1 = m - l + 1;
  var n2 = r - m;

  // Create temp arrays
  var L = new Array(n1);
  var R = new Array(n2);

  let i;
  let j;
  // Copy data to temp arrays L[] and R[]
  for (i = 0; i < n1; i++) L[i] = arr[l + i];
  for (j = 0; j < n2; j++) R[j] = arr[m + 1 + j];
  i = 0;
  j = 0;

  let k = l;

  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      arr[k] = L[i];
      animation.push([i, k, L[i]]);
      i++;
    } else {
      arr[k] = R[j];
      animation.push([j, k, R[j]]);
      j++;
    }
    k++;
  }
  while (i < n1) {
    arr[k] = L[i];
    animation.push([i, k, L[i]]);
    i++;
    k++;
  }

  while (j < n2) {
    arr[k] = R[j];
    animation.push([j, k, R[j]]);
    j++;
    k++;
  }
}

// l is for left index and r is
// right index of the sub-array
// of arr to be sorted */
export function mergeSortAlgorithm(arr, l, r, animation) {
  if (l >= r) {
    return; //returns recursively
  }
  var m = l + parseInt((r - l) / 2);
  mergeSortAlgorithm(arr, l, m, animation);
  mergeSortAlgorithm(arr, m + 1, r, animation);
  merge(arr, l, m, r, animation);
}
