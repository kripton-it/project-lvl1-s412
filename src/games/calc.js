import { play } from '../index';
import { getRandomInteger } from '../help';

const minNumber = 1;
const maxNumber = 20;

const description = 'What is the result of the expression?';

const calcAnswer = (a, b, operation) => {
  switch (operation) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return NaN;
  }
};

const askQuestion = () => {
  const firstOperand = getRandomInteger(minNumber, maxNumber);
  const secondOperand = getRandomInteger(minNumber, maxNumber);
  let operation = '';
  const operationNumber = getRandomInteger(1, 3);

  switch (operationNumber) {
    case 1:
      operation = '+';
      break;
    case 2:
      operation = '-';
      break;
    case 3:
      operation = '*';
      break;
    default:
      break;
  }

  return {
    string: `${firstOperand} ${operation} ${secondOperand}`,
    answer: calcAnswer(firstOperand, secondOperand, operation).toString(),
  };
};

export default () => {
  play(description, askQuestion);
};
