import { getRandomInt, playGame } from '../index.js'

const calcGcd = (num1, num2) => {
  if (num2 === 0) {
    return num1
  } else {
    return calcGcd(num2, num1 % num2)
  }
}

const checkCalcAnswer = (userAnswer, correctAnswer) => {
  return parseInt(userAnswer, 10) === correctAnswer
}

const generateQuestion = () => {
  const num1 = getRandomInt(1, 100)
  const num2 = getRandomInt(1, 100)
  const question = `${num1} ${num2}`
  const correctAnswer = calcGcd(num1, num2)
  return { question, correctAnswer }
}

const gameGcd = () => {
  const gameLogic = {
    intro: 'Find the greatest common divisor of given numbers.',
    getQuestion: generateQuestion,
  }

  playGame(gameLogic, checkCalcAnswer)
}

export default gameGcd
