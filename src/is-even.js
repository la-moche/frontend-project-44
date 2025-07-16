import readlineSync from 'readline-sync';

const isEven = (num) => num % 2 === 0;
const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const game = () => {
  const min = 0;
  const max = 100;
  const randomNum = getRandomInt(min, max);
  const answer = readlineSync.question(
    `Answer "yes" if the number is even, otherwise answer "no".\nQuestion: ${randomNum}\n`,
  );

  if (isEven(randomNum) && answer.toLowerCase() === 'yes') {
    console.log('Correct!');
  } else if (!isEven(randomNum) && answer.toLowerCase() === 'no') {
    console.log('Correct!');
  } else {
    console.log('Wrong answer. Try again!');
  }
};
