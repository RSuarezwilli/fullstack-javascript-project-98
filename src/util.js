export function getRandomNumber(number) {
    return Math.floor(Math.random() * number) + 1;
  }

  const firstRandomNumber = getRandomNumber(10);