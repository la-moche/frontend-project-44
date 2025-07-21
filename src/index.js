import readlineSync from 'readline-sync';
import greetUser from './cli.js';
import crypto from 'crypto';

const MAX_ROUNDS = 3; // Максимальное количество раундов

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomBuffer = crypto.randomBytes(4);
  const randomValue = randomBuffer.readUInt32BE(0);
  return (randomValue % (max - min + 1)) + min;
};

const playGame = (gameLogic, checkAnswer) => {
  const userName = greetUser();
  console.log(gameLogic.intro);

  for (let i = 0; i < MAX_ROUNDS; i++) {
    const { question, correctAnswer } = gameLogic.getQuestion();
    const userAnswer = readlineSync.question(
      `Question: ${question}\nYour answer: `,
    );

    if (checkAnswer(userAnswer, correctAnswer)) {
      console.log('Correct!');
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export { getRandomInt, playGame };
