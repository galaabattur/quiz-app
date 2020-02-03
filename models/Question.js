class Question {
  constructor(question, answer) {
    this._question = question;
    this._answer = answer;
  }

  getQuestion() {
    return this._question;
  }

  getAnswer() {
    return this._answer;
  }
}

module.exports = Question;
