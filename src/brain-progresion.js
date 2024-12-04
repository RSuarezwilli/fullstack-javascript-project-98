#!/usr/bin/env node

const readlineSync = require('readline-sync');

// Función para generar una progresión aritmética con un número oculto
function generateProgressionGame(length, start, step, hiddenIndex) {
  const progression = [];
  for (let i = 0; i < length; i++) {
    if (i === hiddenIndex) {
      progression.push('..'); // Representa el número oculto
    } else {
      progression.push(start + i * step);
    }
  }
  return progression;
}

// Función principal del juego
function playProgressionGame() {
  console.log('¡Bienvenido al Juego de Progresiones Aritméticas!');
  console.log('Encuentra el número que falta en la progresión.');

  const progressionLength = 10;
  const start = Math.floor(Math.random() * 10) + 1; // Número inicial aleatorio
  const step = Math.floor(Math.random() * 10) + 1;  // Incremento aleatorio
  const hiddenIndex = Math.floor(Math.random() * progressionLength); // Índice oculto

  // Generar progresión y obtener la respuesta correcta
  const progression = generateProgressionGame(progressionLength, start, step, hiddenIndex);
  const correctAnswer = start + hiddenIndex * step;

  // Mostrar la progresión al usuario
  console.log(`Progresión: ${progression.join(' ')}`);

  // Leer respuesta del usuario
  const userAnswer = readlineSync.question('Tu respuesta: ');

  // Comprobar respuesta
  if (parseInt(userAnswer, 10) === correctAnswer) {
    console.log('¡Correcto!');
  } else {
    console.log(`¡Incorrecto! La respuesta correcta era ${correctAnswer}.`);
  }
}

// Ejecutar el juego
playProgressionGame();
