//src/greetUser.js
import readlineSync from 'readline-sync';

const greetUser = () => {
  console.log('¡Bienvenido a Brain Games!');
  const userName = 'John';  
  console.log(`¡Hola, ${userName}!`);
};

export default greetUser;


