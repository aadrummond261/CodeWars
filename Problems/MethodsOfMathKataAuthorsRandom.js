function rndCode() {
  const letters = "ABCDEFGHIJKLM";
  const symbols = "~!@#$%^&*";
  let code = "";

  code += letters[~~(letters.length * Math.random())];
  code += letters[~~(letters.length * Math.random())];

  for (let i = 0; i < 4; i++) {
    code += ~~(10 * Math.random());
  }

  code += symbols[~~(symbols.length * Math.random())];
  code += symbols[~~(symbols.length * Math.random())];

  return code;
}

module.exports = rndCode;
