import { getRandomInt, playGame } from '../index.js'

const calculate = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return num1 + num2
    case '-':
      return num1 - num2
    case '*':
      return num1 * num2
    default:
      throw new Error('Unsupported operation')
  }
}

const checkCalcAnswer = (userAnswer, correctAnswer) => {
  return parseInt(userAnswer, 10) === correctAnswer
}

const generateQuestion = () => {
  const operations = ['+', '-', '*']
  const num1 = getRandomInt(1, 25)
  const num2 = getRandomInt(1, 25)
  const operation = operations[getRandomInt(0, operations.length - 1)]
  const question = `${num1} ${operation} ${num2}`
  const correctAnswer = calculate(num1, num2, operation)
  return { question, correctAnswer }
}

const gameCalc = () => {
  const gameLogic = {
    intro: 'What is the result of the expression?',
    getQuestion: generateQuestion,
  }

  playGame(gameLogic, checkCalcAnswer)
}

export default gameCalc
