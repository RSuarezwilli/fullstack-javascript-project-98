import readlineSync from 'readline-sync';

function generateProgression() {
  const start = Math.floor(Math.random() * 50); 
  const step = Math.floor(Math.random() * 10) + 2; 
  const progression = [];
  const missingIndex = Math.floor(Math.random() * 10); 

  for (let i = 0; i < 10; i++) {
    if (i === missingIndex) {
      progression.push('..'); 
    } else {
      progression.push(start + i * step); 
    }
  }

  return { progression, missingNumber: start + missingIndex * step };
}

function playGame() {
  console.log('¡Bienvenido a Brain Games!');
  const name = readlineSync.question('¿Cuál es tu nombre? ');
  console.log(`¡Hola, ${name}!`);

  let score = 0;
  const rounds = 3;

  for (let round = 0; round < rounds; round++) {
    const { progression, missingNumber } = generateProgression();
    console.log(`Pregunta: ${progression.join(' ')}`);
    
    const answer = readlineSync.question('Tu respuesta: ¿Qué número falta en la progresión?');

    if (parseInt(answer) === missingNumber) {
      console.log('¡Correcto!');
      score++;
    } else {
      console.log(`'${answer}' es una respuesta incorrecta ;(. La respuesta correcta era '${missingNumber}'.`);
      console.log(`¡Intentémoslo de nuevo, ${name}!`);
      break; 
    }
  }

  if (score === rounds) {
    console.log(`¡Felicidades, ${name}! Has ganado el juego.`);
  } else {
    console.log(`¡Gracias por jugar, ${name}!`);
  }
}

export default playGame;
