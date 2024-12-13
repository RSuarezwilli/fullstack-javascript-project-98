import readlineSync from 'readline-sync';

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};
const playBrainPrime = () => {
  console.log('Welcome to the Brain Prime Game!');
  console.log('Answer "yes" if the number is prime. Otherwise answer "no".');

  const rounds = 3;
  for (let i = 0; i < rounds; i++) {
    const number = Math.floor(Math.random() * 100) + 1;
    const correctAnswer = isPrime(number) ? 'yes' : 'no';

    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong ;(. Correct answer was '${correctAnswer}'.`);
      console.log('Let\'s try again!');
      return;
    }

    console.log('Correct!');
  }

  console.log('Congratulations, you won!');
};

export default playBrainPrime();
