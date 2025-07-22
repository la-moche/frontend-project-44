import { getRandomInt, playGame } from '../index.js';

const formProgression = (start, step, quantity, indOfHidden) => {
  const numbers = [];

  for (let i = 0; i < quantity; i++) {
    const currentElement = start + i * step;
    numbers.push(currentElement);
  }

  const hiddenNumber = numbers[indOfHidden];

  const numbersWithHidNumber = numbers.map((num, index) =>
    index === indOfHidden ? '..' : num,
  );

  return { numbersWithHidNumber, hiddenNumber };
};

const checkAnswer = (userAnswer, correctAnswer) => {
  return parseInt(userAnswer, 10) === correctAnswer;
};

const generateQuestion = () => {
  const firstElement = getRandomInt(1, 25);
  const step = getRandomInt(2, 7);
  const quantityOfElements = getRandomInt(5, 10);
  const indexOfHidElement = getRandomInt(0, quantityOfElements - 1);

  const questionAndAnswer = formProgression(
    firstElement,
    step,
    quantityOfElements,
    indexOfHidElement,
  );
  const { numbersWithHidNumber, hiddenNumber: correctAnswer } =
    questionAndAnswer;
  const question = numbersWithHidNumber.join(' ');
  return { question, correctAnswer };
};

const gameProgression = () => {
  const gameLogic = {
    intro: 'What number is missing in the progression?',
    getQuestion: generateQuestion,
  };

  playGame(gameLogic, checkAnswer);
};

export default gameProgression;
