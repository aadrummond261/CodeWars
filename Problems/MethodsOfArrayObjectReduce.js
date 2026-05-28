function tailAndHead(arr) {
  return arr.slice(1).reduce((product, curr, idx) => {
    const tail = arr[idx] % 10;
    const head = +String(curr)[0];
    return product * (tail + head);
  }, 1);
}