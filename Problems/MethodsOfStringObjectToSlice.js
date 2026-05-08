function cutIt(arr) {
  const minLength = Math.min(...arr.map(s => s.length));
  return arr.map(s => s.slice(0, minLength));
}
