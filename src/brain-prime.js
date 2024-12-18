import readlineSync from 'readline-sync';

const esPrimo = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};
const jugarBrainPrime = () => {
  console.log('¡Bienvenido a Brain Games!');
  const nombre = readlineSync.question('¿Cuál es tu nombre? ');
  console.log(`¡Hola, ${nombre}!`);

  console.log('Responde "yes" si el número dado es primo. De lo contrario, responde "no".');

  const rondas = 3;
  for (let i = 0; i < rondas; i++) {
    const numero = Math.floor(Math.random() * 100) + 1;
    const respuestaCorrecta = esPrimo(numero) ? 'sí' : 'no';

    console.log(`Pregunta: ${numero}`);
    const respuestaUsuario = readlineSync.question('Tu respuesta: ').toLowerCase();

    if (respuestaUsuario !== respuestaCorrecta) {
      console.log(`'${respuestaUsuario}' es incorrecto ;(. La respuesta correcta era '${respuestaCorrecta}'.`);
      console.log(`¡Intentémoslo de nuevo, ${nombre}!`);
      return;
    }

    console.log('¡Correcto!');
    
  }

  console.log(`¡Felicidades, ${nombre}, ganaste!`);
};

export default jugarBrainPrime();
