import readlineSync from 'readline-sync';
import { getUserName } from '../index';
import getRandomInteger from '../help';

const minNumber = 1;
const maxNumber = 200;
const maxQuestionsNumber = 3;
const description = 'What is the result of the expression?';

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
  console.log('Welcome to the Brain Games!');
  console.log(`${description}\n`);
  const userName = getUserName();

  for (let score = 0; score < maxQuestionsNumber; score += 1) {
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
    const correctAnswer = calc(question);
    const userAnswer = readlineSync.question('Your answer: ');

    if (correctAnswer === userAnswer) {
      console.log('Correct!');
    }

    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
    console.log(`Let's try again, ${userName}!`);
    return;
  }

  console.log(`Congratulations, ${userName}!`);
};
