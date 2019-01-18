import { play } from '../index';
import getRandomInteger from '../utils';

const progressionLength = 10;
const minNumber = -50;
const maxNumber = 50;
const minStep = -5;
const maxStep = 5;
const description = 'What number is missing in the progression?';

const getGameData = () => {
  const firstNumber = getRandomInteger(minNumber, maxNumber);
  const step = getRandomInteger(minStep, maxStep);
  const missingPosition = getRandomInteger(1, progressionLength);

  let question = '';
  let answer;

  for (let i = 0; i < progressionLength; i += 1) {
    const currentNumber = firstNumber + i * step;
    if (i + 1 === missingPosition) {
      question += '.. ';
      answer = currentNumber;
    } else {
      question += `${currentNumber} `;
    }
  }

  return { question, answer };
};

export default () => {
  play(description, getGameData);
};
