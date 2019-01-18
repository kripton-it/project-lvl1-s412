import { play } from '../index';
import getRandomInteger from '../utils';

const minNumber = 10;
const maxNumber = 200;
const description = 'Find the greatest common divisor of given numbers.';

const calcGCD = (a, b) => {
  if (a < b) {
    return calcGCD(b, a);
  }
  if (a % b === 0) {
    return b;
  }
  return calcGCD(b, a % b);
};

const getGameData = () => {
  const firstNumber = getRandomInteger(minNumber, maxNumber);
  const secondNumber = getRandomInteger(minNumber, maxNumber);
  const question = `${firstNumber} ${secondNumber}`;
  const answer = calcGCD(firstNumber, secondNumber).toString();

  return { question, answer };
};

export default () => {
  play(description, getGameData);
};
