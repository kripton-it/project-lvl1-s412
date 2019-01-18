import play from '..';
import getRandomInteger from '../utils';

const minNumber = 1;
const maxNumber = 20;
const description = 'What is the result of the expression?';

const getGameData = () => {
  const firstOperand = getRandomInteger(minNumber, maxNumber);
  const secondOperand = getRandomInteger(minNumber, maxNumber);
  const operationNumber = getRandomInteger(1, 3);

  let question;
  let answer;

  switch (operationNumber) {
    case 1:
      question = `${firstOperand} + ${secondOperand}`;
      answer = (firstOperand + secondOperand).toString();
      break;
    case 2:
      question = `${firstOperand} - ${secondOperand}`;
      answer = (firstOperand - secondOperand).toString();
      break;
    case 3:
      question = `${firstOperand} * ${secondOperand}`;
      answer = (firstOperand * secondOperand).toString();
      break;
    default:
      break;
  }

  return { question, answer };
};

export default () => {
  play(description, getGameData);
};
