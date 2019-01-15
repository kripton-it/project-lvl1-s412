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

const isCorrectAnswer = (question, answer) => {
  
};

const checkAnswer = (question, answer) => {
  const correctMessage = 'Correct';
  const wrongMessage = 'Wrong';
  const wrongYesMessage = '\'yes\' is wrong answer ;(. Correct answer was \'no\'';
  const wrongNoMessage = '\'no\' is wrong answer ;(. Correct answer was \'yes\'';
  
  const isEvenQuestion = isEven(question);

  switch (answer) {
    case 'yes':
      if (!isEvenQuestion) {
        return wrongYesMessage;
      }
      return correctMessage;
    case 'no':
      if (isEvenQuestion) {
        return wrongNoMessage;
      }
      return correctMessage;
    default:
      return wrongMessage;
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