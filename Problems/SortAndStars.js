function sortAndStars(strings) {
  const first = strings.slice().sort((a, b) => (a < b ? -1 : a > b ? 1 : 0))[0] || '';
  return first.split('').join('***');
}

module.exports = sortAndStars;
