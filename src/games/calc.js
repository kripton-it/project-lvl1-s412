import { play } from '../index';
import getRandomInteger from '../utils';

const minNumber = 1;
const maxNumber = 20;
const description = 'What is the result of the expression?';

const getGameData = () => {
  const firstOperand = getRandomInteger(minNumber, maxNumber);
  const secondOperand = getRandomInteger(minNumber, maxNumber);
  const operationNumber = getRandomInteger(1, 3);
  /*
    Не совсем понял про константы - если я эти значения вычисляю в ветках switch,
    мне нужны не константы, а переменные
  */
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
