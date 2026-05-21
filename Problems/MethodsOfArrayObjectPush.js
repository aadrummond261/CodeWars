function infiniteLoop(arr, d, n) {
  const flat = [];
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr[i].length; j += 1) {
      flat.push(arr[i][j]);
    }
  }

  const len = flat.length;
  if (len === 0 || n === 0) return arr;

  const shift = ((d === 'right' ? -n : n) % len + len) % len;
  if (shift === 0) return arr;

  const rotated = flat.slice(shift).concat(flat.slice(0, shift));
  let index = 0;

  for (let i = 0; i < arr.length; i += 1) {
    const row = arr[i];
    for (let j = 0; j < row.length; j += 1) {
      row[j] = rotated[index++];
    }
  }

  return arr;
}

module.exports = infiniteLoop;
