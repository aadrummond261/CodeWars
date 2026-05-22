function sortIt(arr) {
  const result = arr.slice();
  const count = {};

  result.forEach(value => {
    count[value] = (count[value] || 0) + 1;
  });

  return result.sort((a, b) => {
    if (count[a] !== count[b]) {
      return count[a] - count[b];
    }
    return b - a;
  });
}

module.exports = sortIt;
