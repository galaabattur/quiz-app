const Question = require("./Question");
class Quiz {
  constructor() {
    this._score = 0;
    this.qIndex = 0;
    this.questions = [
      new Question("[3 1 4 1 5]", "9"),
      new Question("[1 1 2 3 5]", "8")
    ];
  }

  getQuestion() {
    return this.questions[this.qIndex].getQuestion();
  }

  getAnswer() {
    return this.questions[this.qIndex].getAnswer();
  }

  getScore() {
    return this._score;
  }
}

module.exports = Quiz;
