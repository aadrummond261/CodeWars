function countGrade(scores) {
  return scores.reduce(
    (count, score) => {
      if (score === 100) count.S += 1;
      else if (score >= 90) count.A += 1;
      else if (score >= 80) count.B += 1;
      else if (score >= 60) count.C += 1;
      else if (score >= 0) count.D += 1;
      else if (score === -1) count.X += 1;
      return count;
    },
    { S: 0, A: 0, B: 0, C: 0, D: 0, X: 0 }
  );
}

module.exports = countGrade;
