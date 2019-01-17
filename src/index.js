import readlineSync from 'readline-sync';
import { maxQuestionsNumber } from './help';

const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  return userName;
};

export const greeting = () => {
  console.log('Welcome to the Brain Games!\n');
  getUserName();
};

export const play = (description, askQuestion) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${description}\n`);
  const userName = getUserName();

  for (let score = 0; score < maxQuestionsNumber; score += 1) {
    const question = askQuestion();
    console.log(`Question: ${question.string}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (question.answer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${question.answer}'`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};
