// import readlineSync from 'readline-sync';
import { play } from '../index';
import { minNumber, maxNumber, getRandomInteger } from '../help';

const description = 'Answer "yes" if number even otherwise answer "no"';

const askQuestion = () => {
  const question = getRandomInteger(minNumber, maxNumber);
  console.log(`Question: ${question}`);
  return question;
};

const isEven = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

export default () => {
  play(description, askQuestion, isEven);
};
