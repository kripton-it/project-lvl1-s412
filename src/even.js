import readlineSync from 'readline-sync';
import { getUserName } from '..';
import { getRandomInteger, printRules } from './help';

const minNumber = 1;
const maxNumber = 200;
const maxQuestionsNumber = 3;
const rules = 'Answer "yes" if number even otherwise answer "no"';

const isEven = number => !(number % 2);

const getQuestion = () => getRandomInteger(minNumber, maxNumber);

const getAnswer = () => readlineSync.question('Your answer: ');

const isCorrectAnswer = (question, answer) => {
  const isEvenQuestion = isEven(question);
  switch (answer) {
    case 'yes':
      return isEvenQuestion;
    case 'no':
      return !isEvenQuestion;
    default:
      return false;
  }
};

const checkAnswer = (question, answer) => {
  const isCorrect = isCorrectAnswer(question, answer);
  if (!isCorrect) {
    console.log('\'yes\' is wrong answer ;(. Correct answer was \'no\'');
  } else {
    console.log('Correct!');
  }
};

export default () => {
  console.log('Welcome to the Brain Games!');
  printRules(rules);
  const userName = getUserName();
  const question = getQuestion();
  console.log(`Question: ${question}`);
  const answer = getAnswer();
  checkAnswer(question, answer);
};


/*
const questionNumber = */