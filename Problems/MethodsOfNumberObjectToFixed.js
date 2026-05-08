function howManySmaller(arr, n) {
  return arr.filter(num => parseFloat(num.toFixed(2)) < n).length;
}
