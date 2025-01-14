import readlineSync from 'readline-sync';
import greetUser from './src-cli.js';

const isEven = (num) => num % 2 === 0;

const playGame = () => {
  const userName = greetUser();

  console.log('Responde "yes" si el número es par, de lo contrario responde "no".');
  for (let i = 0; i < 3; i += 1) {
    const number = Math.floor(Math.random() * 100) + 1;
    const correctAnswer = isEven(number) ? 'yes' : 'no';

    console.log(`Pregunta: ${number}`);
    const userAnswer = readlineSync.question('Tu respuesta: ');

    if (userAnswer !== correctAnswer) {
      console.log(`"${userAnswer}" es incorrecto ;(. La respuesta correcta era "${correctAnswer}".`);
      console.log(`¡Intentémoslo de nuevo, ${userName}!`);
      return;
    }
    console.log('¡Correcto!');
  }

  console.log(`¡Felicidades, ${userName}!`);
};

export default playGame;
