import { play } from '../index';
import getRandomInteger from '../utils';

const minNumber = 1;
const maxNumber = 20;

const description = 'What is the result of the expression?';

const getAnswer = (a, b, operation) => {
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

const getGameData = () => {
  const firstOperand = getRandomInteger(minNumber, maxNumber);
  const secondOperand = getRandomInteger(minNumber, maxNumber);
  const operationNumber = getRandomInteger(1, 3);
  let generatedQuestion;
  let correctAnswer;

  switch (operationNumber) {
    case 1:
      generatedQuestion = `${firstOperand} + ${secondOperand}`;
      correctAnswer = getAnswer(firstOperand, secondOperand, '+').toString();
      break;
    case 2:
      generatedQuestion = `${firstOperand} - ${secondOperand}`;
      correctAnswer = getAnswer(firstOperand, secondOperand, '-').toString();
      break;
    case 3:
      generatedQuestion = `${firstOperand} * ${secondOperand}`;
      correctAnswer = getAnswer(firstOperand, secondOperand, '*').toString();
      break;
    default:
      break;
  }

  return {
    question: generatedQuestion,
    answer: correctAnswer,
  };
};

export default () => {
  play(description, getGameData);
};
