class GuessTheNumber {
  constructor(answer, limit) {
    this.answer = answer;
    this.lives = limit;
    this.guesses = 0;
    this.limit = limit;
  }

  guess(value) {
    if (this.guesses >= this.limit) throw new Error('Guess limit exceeded');
    this.guesses += 1;
    if (value === this.answer) return true;
    this.lives -= 1;
    return false;
  }
}

module.exports = GuessTheNumber;
