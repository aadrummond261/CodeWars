function threeInOne(arr) {
  const copy = arr.slice();
  const result = [];

  for (let i = 0; i < copy.length; i += 3) {
    result.push((copy[i] || 0) + (copy[i + 1] || 0) + (copy[i + 2] || 0));
  }

  return result;
}

module.exports = threeInOne;
