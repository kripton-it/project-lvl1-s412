import readlineSync from 'readline-sync';
import { getUserName } from './index';
import { getRandomInteger, printRules } from './help';

const minNumber = 1;
const maxNumber = 200;
const maxQuestionsNumber = 3;
const rules = 'Answer "yes" if number even otherwise answer "no"';

const isEven = number => !(number % 2);

const getQuestion = () => getRandomInteger(minNumber, maxNumber);

const getAnswer = () => readlineSync.question('Your answer: ');

const checkAnswer = (question, answer) => {
  const correctMessage = 'Correct';
  const wrongMessage = 'Wrong';
  const wrongYesMessage = '\'yes\' is wrong answer ;(. Correct answer was \'no\'';
  const wrongNoMessage = '\'no\' is wrong answer ;(. Correct answer was \'yes\'';

  const isEvenQuestion = isEven(question);

  switch (answer) {
    case 'yes':
      if (!isEvenQuestion) {
        console.log(wrongYesMessage);
        return false;
      }
      console.log(correctMessage);
      return true;
    case 'no':
      if (isEvenQuestion) {
        console.log(wrongNoMessage);
        return false;
      }
      console.log(correctMessage);
      return true;
    default:
      console.log(wrongMessage);
      return false;
  }
};

export default () => {
  console.log('Welcome to the Brain Games!');
  printRules(`${rules}\n`);
  const userName = getUserName();
  let score = 0;
  while (score < maxQuestionsNumber && score > 0) {
    const question = getQuestion();
    console.log(`Question: ${question}`);
    const answer = getAnswer();
    if (checkAnswer(question, answer)) {
      score += 1;
    } else {
      score = -1;
      console.log(`Let's try again, ${userName}!`);
    }
  }

  if (score === maxQuestionsNumber) {
    console.log(`Congratulations, ${userName}!`);
  }
};
