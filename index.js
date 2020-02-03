const express = new require("express");
const app = express();
const Quiz = require("./models/Quiz");
const bodyParser = require("body-parser");

app.set("view engine", "pug");
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const quiz = new Quiz();
  const score = quiz.getScore();
  const question = quiz.getQuestion();
  res.render("index", { score: score, question: question });
});

app.post("/", (req, res) => {
  console.log("answer path");
  console.log(req.body.answer);
});

app.listen(3000, () => {
  console.log("Listenin on port 3000");
});
