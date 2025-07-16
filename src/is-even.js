import readlineSync from 'readline-sync';
import greetUser from '../src/cli.js';

const userName = greetUser();
const isEven = (num) => num % 2 === 0;
const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

console.log(`Answer "yes" if the number is even, otherwise answer "no".`);

const game = () => {
  let isCorrect = true;
  let answer;
  let correctAnswer;
  const min = 0;
  const max = 100;

  for (let i = 0; i < 3; i += 1) {
    const randomNum = getRandomInt(min, max);
    answer = readlineSync.question(`Question: ${randomNum}\nYour answer: `);

    isEven(randomNum) ? (correctAnswer = 'yes') : (correctAnswer = 'no');

    if (answer.toLowerCase() === correctAnswer) {
      console.log(`Correct!`);
    } else {
      isCorrect = false;
      break;
    }
  }

  if (isCorrect) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(
      `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
    );
    console.log(`Let's try again, ${userName}!`);
  }
};

export default game;
