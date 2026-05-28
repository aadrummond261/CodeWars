function mirrorImage(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let first = arr[i].toString();
    let second = arr[i + 1].toString().split('').reverse().join('');

    if (first === second) {
      return [arr[i], arr[i + 1]];
    }
  }

  return [-1, -1];
}