function cutCube(volume, n) {
  if (!Number.isInteger(volume) || !Number.isInteger(n) || n <= 0) {
    return false;
  }

  if (volume % n !== 0) {
    return false;
  }

  const smallVolume = volume / n;
  const smallSide = Math.round(Math.cbrt(smallVolume));
  const blocksPerSide = Math.round(Math.cbrt(n));

  return blocksPerSide ** 3 === n && smallSide ** 3 === smallVolume;
}

module.exports = cutCube;
