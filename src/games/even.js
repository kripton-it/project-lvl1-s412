// import readlineSync from 'readline-sync';
import { play } from '../index';
import { getRandomInteger } from '../help';

const minNumber = 1;
const maxNumber = 20;

const description = 'Answer "yes" if number even otherwise answer "no"';

const isEven = number => number % 2 === 0;

const calcAnswer = (number) => {
  if (isEven(number)) {
    return 'yes';
  }
  return 'no';
};

const askQuestion = () => {
  const question = getRandomInteger(minNumber, maxNumber);
  return {
    string: `${question}`,
    answer: calcAnswer(question),
  };
};

export default () => {
  play(description, askQuestion);
};
