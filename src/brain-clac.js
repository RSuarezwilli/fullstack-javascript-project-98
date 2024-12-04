const readlineSync = require('readline-sync');

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const askQuestion = () => {
  const num1 = getRandomInt(1, 20);
  const num2 = getRandomInt(1, 20);
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomInt(0, operators.length - 1)];

  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = eval(question);

  const userAnswer = readlineSync.question(`What is ${question}? `);

  if (parseInt(userAnswer, 10) === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(`Wrong! The correct answer was ${correctAnswer}`);
  }
};

askQuestion();