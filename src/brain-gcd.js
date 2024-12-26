import readlineSync from 'readline-sync';

function getGCD(a, b) {
  let num1 = a;
  let num2 = b;
  while (num2 !== 0) {
    const temp = num2;

    num2 = num1 % num2;
    num1 = temp;
  }
  return num1;
}
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function runBrainGCD() {
  console.log('¡Bienvenido a Brain Games!');
  const userName = readlineSync.question('¿Cuál es tu nombre? ');
  console.log(`¡Hola, ${userName}!\n`);
  console.log('Encuentra el máximo común divisor de los números dados.\n');

  const rounds = 3;

  for (let i = 0; i < rounds; i += 1) {
    const num1 = getRandomNumber(1, 100);
    const num2 = getRandomNumber(1, 100);

    const correctAnswer = getGCD(num1, num2);

    console.log(`Pregunta: ${num1} ${num2}`);
    const userAnswer = Number(readlineSync.question('Tu respuesta: '));

    if (userAnswer === correctAnswer) {
      console.log('¡Correcto!');
    } else {
      console.log(`'${userAnswer}' es una respuesta incorrecta ;(. La respuesta correcta era '${correctAnswer}'.`);
      console.log(`¡Intentémoslo de nuevo, ${userName}!`);
      return;
    }
  }

  console.log(`¡Felicidades, ${userName}!`);
}

export default runBrainGCD;
