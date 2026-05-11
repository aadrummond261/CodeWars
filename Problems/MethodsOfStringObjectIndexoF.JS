function firstToLast(str, c) {
  let first = str.indexOf(c);
  
  if (first === -1) {
    return -1;
  }
  
  let last = str.lastIndexOf(c);
  return last - first;
}

console.log(firstToLast("ababc", "a"));
console.log(firstToLast("ababc", "c"));
console.log(firstToLast("ababc", "d"));
