import { getRandomInt, playGame } from '../index.js'

const isPrime = (num) => {
  if (num < 2) return false
  if (num === 2) return true
  if (num % 2 === 0) return false
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false
  }
  return true
}

const checkPrimeAnswer = (userAnswer, correctAnswer) => {
  return userAnswer.toLowerCase() === correctAnswer
}

const gameEven = () => {
  const gameLogic = {
    intro: 'Answer "yes" if given number is prime. Otherwise answer "no".',
    getQuestion: () => {
      const randomNum = getRandomInt(0, 100)
      const correctAnswer = isPrime(randomNum) ? 'yes' : 'no'
      return { question: randomNum, correctAnswer }
    },
  }

  playGame(gameLogic, checkPrimeAnswer)
}

export default gameEven
