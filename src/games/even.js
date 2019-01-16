// import readlineSync from 'readline-sync';
import { play } from '../index';
import { minNumber, maxNumber, getRandomInteger } from '../help';

const description = 'Answer "yes" if number even otherwise answer "no"';

const askQuestion = () => {
  const question = getRandomInteger(minNumber, maxNumber);
  console.log(`Question: ${question}`);
  return question;
};

const isEven = number => number % 2 === 0;

export default () => {
  play(description, askQuestion, isEven);
};
