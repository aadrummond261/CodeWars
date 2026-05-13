function shuffleIt(arr, ...pairs) {
  pairs.forEach(([i, j]) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  });
  return arr;
}