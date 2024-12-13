import readlineSync from 'readline-sync';

// Función para calcular el MCD (Máximo Común Divisor) de dos números
function getGCD(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

// Función para generar un número aleatorio entre un rango
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Función principal para el juego de MCD
function runBrainGCD() {
  console.log('¡Bienvenido a Brain Games!');
  const userName = readlineSync.question('¿Cuál es tu nombre? ');
  console.log(`¡Hola, ${userName}!\n`);
  console.log('Encuentra el máximo común divisor de los números dados.\n');

  const rounds = 3;

  for (let i = 0; i < rounds; i++) {
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

