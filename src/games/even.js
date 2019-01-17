import { play } from '../index';
import getRandomInteger from '../utils';

const minNumber = 1;
const maxNumber = 20;

const description = 'Answer "yes" if number even otherwise answer "no"';

const isEven = number => number % 2 === 0;

const getGameData = () => {
  const question = getRandomInteger(minNumber, maxNumber);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return {
    question: `${question}`,
    answer: correctAnswer,
  };
};

export default () => {
  play(description, getGameData);
};
