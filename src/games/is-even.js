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
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  
  for (let i = 0; i < 3; i += 1) {
    const randomNum = getRandomInt(0, 100);
    const userAnswer = readlineSync.question(`Question: ${randomNum}\nYour answer: `);

    // Определяем правильный ответ
    const correctAnswer = isEven(randomNum) ? 'yes' : 'no';

    if (userAnswer.toLowerCase() === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      console.log(`Let's try again, ${userName}!`);
      return; // Завершаем игру при неправильном ответе
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default gameEven;
