// src/cli.js

// src/greetUser.js
import readlineSync from 'readline-sync';

const greetUser = () => {
  console.log('¡Bienvenido a Brain Games!');
  const userName = readlineSync.question('¿Cuál es tu nombre? ');  // Aquí el usuario puede ingresar su nombre
  console.log(`¡Hola, ${userName}!`);
};

export default greetUser;

