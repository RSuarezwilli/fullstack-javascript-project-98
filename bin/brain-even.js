#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { welcome } from '../src/cli.js';  // Suponiendo que existe un saludo en cli.js.
import { getRandomNumber } from '../src/util.js';

const isEven = (num) => num % 2 === 0;

const getQuestionAndAnswer = () => {
  const number = getRandomNumber(10);
   
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return { question: `Is ${number} even?`, correctAnswer };
};

const game = () => {
  welcome();  // Llamada al saludo si está en cli.js
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i++) {
    const { question, correctAnswer } = getQuestionAndAnswer();
    console.log(question);
    
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();

    if (userAnswer !== correctAnswer) {
      console.log(`Sorry, that's wrong! The correct answer was "${correctAnswer}".`);
      return;
    }

    console.log('Correct!');
  }

  console.log('Congratulations, you won!');
};

game();
