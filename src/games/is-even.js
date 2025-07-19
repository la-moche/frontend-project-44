import readlineSync from 'readline-sync';
import greetUser from '../cli.js';
import crypto from 'crypto'; // Импортируем модуль crypto

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  
  // Генерируем случайные байты
  const randomBuffer = crypto.randomBytes(4); // 4 байта для получения 32-битного числа
  const randomValue = randomBuffer.readUInt32BE(0); // Читаем значение как 32-битное беззнаковое целое

  // Преобразуем случайное значение в нужный диапазон
  return (randomValue % (max - min + 1)) + min;
};

const isEven = (num) => num % 2 === 0; // Функция для проверки четности

const userName = greetUser();

const gameEven = () => {
  let isCorrect = true;
  let answer;
  let correctAnswer;
  const min = 0;
  const max = 100;

  for (let i = 0; i < 3; i += 1) {
    const randomNum = getRandomInt(min, max);
    answer = readlineSync.question(`Question: ${randomNum}\nYour answer: `);

    // Извлечение присваивания correctAnswer
    if (isEven(randomNum)) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }

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

export default gameEven;

