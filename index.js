const express = new require("express");
const app = express();
const Quiz = require("./models/Quiz");

app.set("view engine", "pug");
app.use(express.json());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  console.log(req.body.answer);

  const quiz = new Quiz();
  const score = quiz.getScore();
  const question = quiz.getQuestion();
  res.render("index", { score: score, question: question });
});

app.post("/answer", (req, res) => {
  console.log(req.body.answer);
});

app.listen(3000, () => {
  console.log("Listenin on port 3000");
});
