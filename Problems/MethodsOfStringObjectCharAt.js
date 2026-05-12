function topSecret(file) {
  return file.split("").map(char => {
    if (char >= "a" && char <= "z") {
      return String.fromCharCode((char.charCodeAt(0) - 97 - 3 + 26) % 26 + 97);
    }

    if (char >= "A" && char <= "Z") {
      return String.fromCharCode((char.charCodeAt(0) - 65 - 3 + 26) % 26 + 65);
    }

    return char;
  }).join("");
}

answer1 = "4022";
answer2 = "fUHkAn";
answer3 = "Nail scissors";