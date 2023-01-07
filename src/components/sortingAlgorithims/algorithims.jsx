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

export const mergeSortAlgorithm = (array) => {};
