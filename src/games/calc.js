// import readlineSync from 'readline-sync';
import { play } from '../index';
import { minNumber, maxNumber, getRandomInteger } from '../help';

const description = 'What is the result of the expression?';

const askQuestion = () => {
  const question = {
    a: getRandomInteger(minNumber, maxNumber),
    b: getRandomInteger(minNumber, maxNumber),
    operation: '',
  };
  const operationNumber = getRandomInteger(1, 3);
  switch (operationNumber) {
    case 1:
      question.operation = '+';
      break;
    case 2:
      question.operation = '-';
      break;
    case 3:
      question.operation = '*';
      break;
    default:
      break;
  }
  console.log(`Question: ${question.a} ${question.operation} ${question.b}`);
  return question;
};

const calc = (question) => {
  switch (question.operation) {
    case '+':
      return question.a + question.b;
    case '-':
      return question.a - question.b;
    case '*':
      return question.a * question.b;
    default:
      return NaN;
  }
};

export default () => {
  play(description, askQuestion, calc);
};
