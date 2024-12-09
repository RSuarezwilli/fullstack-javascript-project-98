import readlineSync from 'readline-sync';
import greetUser from './src/src-cli.js';



const isEven = (num) => num % 2 === 0;

const greetUser = () => {
  console.log('¡Bienvenido a los Juegos Mentales!');
  console.log('Responde "sí" si el número es par, de lo contrario responde "no".');
  const userName = readlineSync.question('¿Cómo te llamas? ');
  console.log(`¡Hola, ${userName}!`);

  for (let i = 0; i < 3; i++) {
    const number = Math.floor(Math.random() * 100) + 1;
    const correctAnswer = isEven(number) ? 'sí' : 'no';

    console.log(`Pregunta: ${number}`);
    const userAnswer = readlineSync.question('Tu respuesta: ');

    if (userAnswer !== correctAnswer) {
      console.log(`"${userAnswer}" es incorrecto ;(. La respuesta correcta era "${correctAnswer}".`);
      console.log(`¡Inténtalo de nuevo, ${userName}!`);
      return;
    }
    console.log('¡Correcto!');
  }

  console.log(`¡Felicidades, ${userName}!`);
};

export default greetUser;
