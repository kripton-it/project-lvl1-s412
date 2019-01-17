import { play } from '../index';
import { getRandomInteger } from '../utils';

const minNumber = 1;
const maxNumber = 20;

const description = 'Answer "yes" if number even otherwise answer "no"';

const isEven = number => number % 2 === 0;

const calcAnswer = number => isEven(number) ? 'yes' : 'no';

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
