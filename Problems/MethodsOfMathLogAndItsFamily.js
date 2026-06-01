function thinkingAndTesting(number, base){
  return number - Math.pow(base, Math.floor(Math.log(number) / Math.log(base)));
}