function fiveLine(s) {
  const trimmed = s.trim();
  return [1, 2, 3, 4, 5]
    .map(n => `${trimmed.repeat(n)}`)
    .join("\n");
}
