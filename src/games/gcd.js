import { play } from '../index';
import { getRandomInteger } from '../help';

const minNumber = 10;
const maxNumber = 200;

const description = 'Find the greatest common divisor of given numbers.';

const calcAnswer = (a, b) => {
  if (a < b) {
    return calcAnswer(b, a);
  }
  if (a % b === 0) {
    return b;
  }
  return calcAnswer(b, a % b);
};

const askQuestion = () => {
  const firstNumber = getRandomInteger(minNumber, maxNumber);
  const secondNumber = getRandomInteger(minNumber, maxNumber);

  return {
    string: `${firstNumber} ${secondNumber}`,
    answer: calcAnswer(firstNumber, secondNumber).toString(),
  };
};

export default () => {
  play(description, askQuestion);
};
