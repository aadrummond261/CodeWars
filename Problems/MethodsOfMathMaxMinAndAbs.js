function maxMin(arr1, arr2) {
  const diffs = arr1.map((num, i) => Math.abs(num - arr2[i]));
  
  return [Math.max(...diffs), Math.min(...diffs)];
}