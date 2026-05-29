function roundIt(n) {
  const parts = n.toString().split('.');
  const left = parts[0].length;
  const right = parts[1].length;

  if (left < right) return Math.ceil(n);
  if (left > right) return Math.floor(n);
  return Math.round(n);
}