const chalk = require("chalk");
const readlineSync = require("readline-sync");

let score = 0;
console.log(chalk.blue("Marvel Quiz Game"));

const playerName = readlineSync.question(chalk.gray("What is your name? "));
console.log(chalk.magenta("Welcome " + playerName));

function play(question, answer) {
  let playeraAnswer = readlineSync.question(question);

  if (playeraAnswer === answer) {
    console.log(chalk.green.bold("CORRECT ANSWER\n"));
    score = score + 1;
  } else {
    console.log(chalk.red.bold("WRONG ANSWER\n"));
  }
}

// questions for quiz
let questions = [
  {
    question:
      "What year was the first Iron Man movie released, kicking off the Marvel Cinematic Universe?",
    answer: "2008",
  },
  {
    question: "What is the name of Thor’s hammer?",
    answer: "Mjolnir",
  },
  {
    question:
      "In the Incredible Hulk, what does Tony tell Thaddeus Ross at the end of the film?",
    answer: "That they are putting a team together",
  },
  {
    question: " What is Captain America’s shield made of?",
    answer: "Vibranium",
  },
  {
    question:
      "The Flerkens are a race of extremely dangerous aliens that resembles what?",
    answer: "Cats",
  },
];


for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}


console.log(
  "-----------------------------------------------------------------------------"
);
console.log(chalk.bgGrey.green.bold(`Your total score is ${score}`));
console.log(
  "-----------------------------------------------------------------------------"
);
