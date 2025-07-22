import { getRandomInt, playGame } from '../index.js'

const isEven = (num) => num % 2 === 0

const checkEvenAnswer = (userAnswer, correctAnswer) => {
  return userAnswer.toLowerCase() === correctAnswer
}

const gameEven = () => {
  const gameLogic = {
    intro: 'Answer "yes" if the number is even, otherwise answer "no".',
    getQuestion: () => {
      const randomNum = getRandomInt(0, 100)
      const correctAnswer = isEven(randomNum) ? 'yes' : 'no'
      return { question: randomNum, correctAnswer }
    },
  }

  playGame(gameLogic, checkEvenAnswer)
}

export default gameEven
