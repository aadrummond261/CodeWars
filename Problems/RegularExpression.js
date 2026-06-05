function findSimilarity(str, word) {
  const pattern = new RegExp(
    '^' +
      word[0].replace(/[.*+?^${}()|[\]\\]/g, '\\$&') +
      (word.length > 2 ? '.'.repeat(word.length - 2) : '') +
      (word.length > 1
        ? word[word.length - 1].replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
        : '' ) +
      '$'
  );

  return str
    .split(' ')
    .filter((w) => pattern.test(w))
    .join(' ');
}

module.exports = findSimilarity;
