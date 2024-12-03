#!/usr/bin/env node

const readlineSync = require('readline-sync');

// Función para calcular el MCD usando el algoritmo de Euclides
function gcd(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

// Función para jugar el juego
function playGame() {
  console.log('Bienvenido al Juego del MCD!');
  const num1 = Math.floor(Math.random() * 100) + 1;
  const num2 = Math.floor(Math.random() * 100) + 1;
  
  const correctAnswer = gcd(num1, num2);

  console.log(`Pregunta: ¿Cuál es el MCD de ${num1} y ${num2}?`);
  const userAnswer = readlineSync.question('Tu respuesta: ');

  if (parseInt(userAnswer, 10) === correctAnswer) {
    console.log('¡Correcto!');
  } else {
    console.log(`¡Incorrecto! La respuesta correcta era ${correctAnswer}.`);
  }
}

playGame();
