import play from '..';
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
  const answer = (firstNumber + (missingPosition - 1) * step).toString();

  let question = '';

  for (let i = 1; i <= progressionLength; i += 1) {
    const currentNumber = firstNumber + (i - 1) * step;
    if (i === missingPosition) {
      question += '.. ';
    } else {
      question += `${currentNumber} `;
    }
  }

  return { question, answer };
};

export default () => {
  play(description, getGameData);
};
