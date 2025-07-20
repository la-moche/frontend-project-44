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

const calculate = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error('Unsupported operation');
  }
};

const generateQuestion = () => {
  const operations = ['+', '-', '*'];
  const num1 = getRandomInt(1, 25);
  const num2 = getRandomInt(1, 25);
  const operation = operations[getRandomInt(0, operations.length - 1)];
  const operationSymbol = operation === '*' ? '×' : operation; // Заменяем * на ×
  const question = `${num1} ${operationSymbol} ${num2}`;
  const correctAnswer = calculate(num1, num2, operation); // Вычисляем правильный ответ
  return { question, correctAnswer };
};

const userName = greetUser();

const gameCalc = () => {
  console.log('What is the result of the expression?');

  for (let i = 0; i < 3; i++) {
    // 3 вопроса
    const { question, correctAnswer } = generateQuestion();
    const userAnswer = readlineSync.question(
      `Question: ${question}\nYour answer: `,
    );

    if (parseInt(userAnswer) === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${userName}!`,
      );
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default gameCalc;
