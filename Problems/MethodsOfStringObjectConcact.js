function splitAndMerge(str, separator) {
  return str.split(" ").map(word => word.split("").join(separator)).join(" ");
}

console.log(splitAndMerge("My name is John", " "));
console.log(splitAndMerge("My name is John", "-"));
console.log(splitAndMerge("Hello World!", "."));
console.log(splitAndMerge("Hello World!", ","));
