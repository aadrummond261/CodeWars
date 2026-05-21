function solution(str) {
  const result = [];
  for (let i = 0; i < str.length; i += 2) {
    const first = str[i];
    const second = str[i + 1] === undefined ? '_' : str[i + 1];
    result.push(first + second);
  }
  return result;
}

module.exports = solution;
