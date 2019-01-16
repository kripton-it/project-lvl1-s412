import readlineSync from 'readline-sync';
import { getUserName } from './index';
import { getRandomInteger, isEven } from './help';

const minNumber = 1;
const maxNumber = 200;
const maxQuestionsNumber = 3;
const description = 'Answer "yes" if number even otherwise answer "no"';

const getQuestion = () => getRandomInteger(minNumber, maxNumber);

const getAnswer = () => readlineSync.question('Your answer: ');

const checkAnswer = (question, answer) => {
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  if (correctAnswer === answer) {
    console.log('Correct!');
    return true;
  }

  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
  return false;
};

export default () => {
  console.log('Welcome to the Brain Games!');
  console.log(`${description}\n`);
  const userName = getUserName();

  for (let score = 0; score < maxQuestionsNumber; score += 1) {
    const question = getQuestion();
    console.log(`Question: ${question}`);
    const userAnswer = getAnswer();
    if (checkAnswer(question, userAnswer) === false) {
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};
