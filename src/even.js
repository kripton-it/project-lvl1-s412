import readlineSync from 'readline-sync';
import { getUserName } from './index';
import getRandomInteger from './help';

const minNumber = 1;
const maxNumber = 200;
const maxQuestionsNumber = 3;
const description = 'Answer "yes" if number even otherwise answer "no"';

const isEven = number => number % 2 === 0;

export default () => {
  console.log('Welcome to the Brain Games!');
  console.log(`${description}\n`);
  const userName = getUserName();

  for (let score = 0; score < maxQuestionsNumber; score += 1) {
    const question = getRandomInteger(minNumber, maxNumber);
    console.log(`Question: ${question}`);
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    const userAnswer = readlineSync.question('Your answer: ');

    if (correctAnswer === userAnswer) {
      console.log('Correct!');
    }

    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
    console.log(`Let's try again, ${userName}!`);
    return;
  }

  console.log(`Congratulations, ${userName}!`);
};
