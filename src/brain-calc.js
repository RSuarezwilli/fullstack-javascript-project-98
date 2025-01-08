import readlineSync from 'readline-sync';
import getRandomNumber from './util.js';

function playBrainGame() {
  
  const playerName= greetUser()
  console.log('¿Cuál es el resultado de la expresión?');

  const operations = ['+', '-', '*'];
  const rounds = 3;

  for (let i = 0; i < rounds; i += 1) {
    const num1 = getRandomNumber(1, 30);
    const num2 = getRandomNumber(1, 30);
    const operation = operations[getRandomNumber(0, operations.length - 1)];

    const question = `${num1} ${operation} ${num2}`;
    let correctAnswer;

    switch (operation) {
      case '+':
        correctAnswer = num1 + num2;
        break;
      case '-':
        correctAnswer = num1 - num2;
        break;
      case '*':
        correctAnswer = num1 * num2;
        break;
      default:
        console.log('Operación desconocida.');
        return;
    }

    console.log(`Pregunta: ${question}`);
    const userAnswer = Number(readlineSync.question('Tu respuesta: '));

    if (userAnswer === correctAnswer) {
      console.log('¡Correcto!');
    } else {
      console.log(`¡Intentémoslo de nuevo, ${playerName}!`);
      return;
    }
  }
  console.log(`¡Felicidades, ${playerName}!`);
}

export default playBrainGame;
