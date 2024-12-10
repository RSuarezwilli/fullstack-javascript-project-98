import readlineSync from 'readline-sync';
import runBrainCalc from '../src/src-cli.js';


function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function runBrainCalc() {
  console.log('¡Bienvenido al juego de cálculo mental!');
  console.log('Responde correctamente a las operaciones matemáticas.\n');

  const operations = ['+', '-', '*'];
  const rounds = 3;

  for (let i = 0; i < rounds; i++) {
    const num1 = getRandomNumber(1, 10);
    const num2 = getRandomNumber(1, 10);
    const operation = operations[getRandomNumber(0, operations.length - 1)];

    const question = `${num1} ${operation} ${num2}`;
    const correctAnswer = eval(question); // Evalúa la operación

    console.log(`Pregunta: ${question}`);
    const userAnswer = Number(readlineSync.question('Tu respuesta: '));

    if (userAnswer === correctAnswer) {
      console.log('¡Correcto!');
    } else {
      console.log(`Incorrecto. La respuesta correcta era ${correctAnswer}.`);
      return;
    }
  }

  console.log('¡Felicidades! Has ganado el juego.');
}

export default runBrainCalc;
